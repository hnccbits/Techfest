/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { FaUpload } from 'react-icons/fa';

import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
// import Navbar from '../../components/navbar/Navbar';
import { toast } from 'react-toastify';
import axiosInstance from '../../api/axios';
import { AuthContext } from '../../context/AuthContext';

function AddEvent() {
  const { user } = useContext(AuthContext);

  const history = useRouter();

  useEffect(() => {
    if (!user || (user && !user.admin)) {
      history.push('/admin/login');
    }
  }, []);

  const router = useRouter();
  const [value, setValue] = useState({
    name: '',
    teamsize: '',
    desc: '',
    dateofevent: 'day1',
  });

  const [errMsg, setErrMsg] = useState('');
  const [coverimg, setCoverimg] = useState();
  const [rulebook, setRulebook] = useState();
  const [problemstatement, setProblemstatement] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onToast = ({ msg, type }) =>
    toast(msg, {
      hideProgressBar: false,
      position: 'bottom-right',
      autoClose: 6000,
      type,
    });
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value.name === '' || value.teamsize === '' || value.desc === '') {
      setErrMsg('All the fields are required');
      return;
    }
    if (!coverimg) {
      setErrMsg('Must Upload Event Poster');
    } else {
      try {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('coverimg', coverimg);
        formData.append('rulebook', rulebook);
        if (problemstatement) {
          formData.append('problemstatement', problemstatement);
        }
        formData.append('name', value.name);
        formData.append('teamsize', value.teamsize);
        formData.append('desc', value.desc);
        formData.append('dateofevent', value.dateofevent);
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };
        await axiosInstance.post('/admin/add/event', formData, config);
        onToast({
          msg: 'Event Added Successfully',
          type: 'success',
        });
        router.push('/admin/events');
      } catch (err) {
        if (!err?.response) {
          setErrMsg('No Internet connection');
        } else if (err.response?.status === 400) {
          setErrMsg(err.response.data.error);
        } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
        } else {
          setErrMsg('Login Failed');
        }
      }
    }
  };
  if (errMsg) {
    onToast({
      msg: errMsg,
      type: 'alert',
    });
    setErrMsg('');
    setIsLoading(false);
  }
  return (
    <>
      {/* <Navbar /> */}
      <div className="eventRegister">
        <div className="heading">
          Add Your Event <img src="img/line.svg" alt="" />
        </div>
        <form encType="multipart/form-data" className="adminEventAddForm">
          <div className="adminEventAddLine1">
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Event Name"
            />
            <input
              onChange={handleChange}
              name="teamsize"
              type="number"
              placeholder="Maximum Team Size"
            />
          </div>
          <div className="adminEventAddLine2">
            <div className="fileInput">
              <input
                onChange={(e) => {
                  setCoverimg(e.target.files[0]);
                }}
                name="coverimg"
                type="file"
              />
              <FaUpload />
              <span>Upload Event Poster</span>
            </div>
            <textarea
              onChange={handleChange}
              name="desc"
              placeholder="Event Description"
            />
          </div>
          <div className="adminEventAddLine3">
            <select onChange={handleChange} name="dateofevent">
              <option value="day1">Day 1 (26th Feb)</option>
              <option value="day2">Day 2 (27th Feb)</option>
              <option value="day3">Day 3 (28th Feb)</option>
            </select>
            <div className="fileInput">
              <input
                onChange={(e) => {
                  setRulebook(e.target.files[0]);
                }}
                name="rulebook"
                type="file"
              />
              <FaUpload />
              <span>Upload RuleBook</span>
            </div>
            <div className="fileInput">
              <input
                onChange={(e) => {
                  setProblemstatement(e.target.files[0]);
                }}
                name="problemstatement"
                type="file"
              />
              <FaUpload />
              <span>Upload Problem Statement</span>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            onClick={handleSubmit}
            value="Register Event"
          >
            {isLoading ? 'Loading...' : 'Add Event'}
          </button>
        </form>
      </div>
    </>
  );
}

export default AddEvent;
