/* eslint-disable no-unused-vars */
import { useState } from 'react';
import FileDownload from 'js-file-download';
import { useRouter } from 'next/router';
import axiosInstance from '../../api/axios';
import Styles from './AdminEventCard.module.css';

function CustomModal({ isOpen, onCancel, onConfirm }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={Styles.modalOverlay}>
      <div className={Styles.modalContent}>
        <p>Are you sure you want to delete this event?</p>
        <div className={Styles.modalButtons}>
          <button type="button" className={Styles.b1} onClick={onConfirm}>
            Yes
          </button>
          <button type="button" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

function AdminEventCard({
  deleteEventHandler,
  name,
  acceptingResponseHandler,
  registrationopen,
  coverimg,
  participants,
  id,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Router = useRouter();
  const [errMsg, setErrMsg] = useState('');

  const handleDeleteRequest = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    try {
      const res = await axiosInstance({
        method: 'delete',
        url: `/admin/delete/event/${id}`,
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false,
      });
      if (res.status === 201) {
        deleteEventHandler(id);
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg(err.response.data.error);
      } else {
        setErrMsg('Unknown Error');
      }
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEdit = () => {
    Router.push(`/admin/edit/${id}`);
  };
  const handleDownloadResponse = async () => {
    try {
      const res = await axiosInstance({
        method: 'post',
        url: '/admin/download/response',
        data: { _id: id },
        responseType: 'blob',
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false,
      });
      FileDownload(
        res.data,
        `${name} - ${new Date().toLocaleDateString()} Response.xlsx`,
      );
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg(err.response.data.error);
      } else {
        setErrMsg('Unknown Error');
      }
    }
  };

  const handleCloseRegistration = async (e) => {
    try {
      e.preventDefault();

      const res = await axiosInstance({
        method: 'patch',
        url: `/admin/toggleacceptresponse/event/${id}`,
        data: {
          registrationopen: !registrationopen,
        },
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false,
      });
      acceptingResponseHandler(id);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg(err.response.data.error);
      } else {
        setErrMsg('Unknown Error');
      }
    }
  };

  const participantlength = participants.length;
  const img = `https://techmahotsav.blob.core.windows.net/data/${coverimg}`;
  return (
    <div className="adminEventCard">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <div className="closeBtn">
        <span>
          {registrationopen ? 'Registration open' : 'Registration closed'}
        </span>
        <input
          value={registrationopen}
          onChange={handleCloseRegistration}
          type="checkbox"
          name="registrationopen"
        />
      </div>
      <div onClick={handleDeleteRequest} className="deleteBtn">
        D
      </div>
      <CustomModal
        isOpen={isModalOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <div onClick={handleEdit} className="editBtn">
        E
      </div>
      <div onClick={handleDownloadResponse} className="bottomBtn">
        Download Response
      </div>
    </div>
  );
}

export default AdminEventCard;
