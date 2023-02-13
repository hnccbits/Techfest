/* eslint-disable react/no-array-index-key */
/* eslint-disable eqeqeq */
import { MdDelete } from 'react-icons/md';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Styles from './Model.module.css';
import axiosInstance from '../../api/axios';

export default function Modal({ handleModalToggle, open, teamsize, id }) {
  const [inputBoxActive, setInputBoxActive] = useState(false);
  const [teamname, setTeamname] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [participant, setParticipant] = useState([]);
  const ahandleModalToggle = () => {
    setParticipant([]);
    handleModalToggle();
  };

  const [member, setMember] = useState({
    name: '',
    phone: '',
    email: '',
    whatsapp: '',
    gender: 'M',
    id: Date.now(),
  });
  const onToast = ({ msg, type }) =>
    toast(msg, {
      position: 'bottom-right',
      theme: 'dark',
      autoClose: 6000,
      type,
    });
  const handleAddMember = (e) => {
    e.preventDefault();
    if (
      member.name === '' ||
      member.phone === '' ||
      member.whatsapp === '' ||
      member.email === ''
    ) {
      onToast({
        msg: 'Invalid data entered. please check the input.',
        type: 'warn',
      });
    } else if (member.phone.length !== 10 || member.whatsapp.length !== 10) {
      onToast({
        msg: 'Phone/whatsapp number cannot. be more than 10 digit',
        type: 'warn',
      });
    } else {
      setParticipant([...participant, member]);
      setMember({
        name: '',
        phone: '',
        email: '',
        whatsapp: '',
        gender: 'M',
        id: Date.now(),
      });
      const memberlength = participant.length + 2;
      onToast({
        msg: `Member ${memberlength} added successfully`,
        type: 'success',
      });
      setInputBoxActive(false);
    }
  };

  const handleChange = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    });
  };

  const handleRemoveMember = (i) => {
    setParticipant(participant.filter((item) => item.id !== i));
  };

  const ahandleSubmit = async () => {
    try {
      setIsLoading(true);
      await axiosInstance({
        method: 'post',
        url: '/register/event',
        data: { teamname, participant, _id: id },
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false,
      });
      onToast({
        msg: `You have successfully registered for the event`,
        type: 'success',
      });
      setParticipant([]);
      setIsLoading(false);
      ahandleModalToggle();
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Internet connection');
      } else if (err.response?.status === 400) {
        setErrMsg(err.response.data.error);
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Registration Failed');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      member.name !== '' ||
      member.phone !== '' ||
      member.whatsapp !== '' ||
      member.email !== ''
    ) {
      handleAddMember();
    }
    if (teamsize != 1) {
      if (teamname === '') {
        setErrMsg('Please Enter Team Name');
        return;
      }
      ahandleSubmit();
    } else {
      setTeamname('-----');
      ahandleSubmit();
    }
  };

  const handleIputBoxActive = () => {
    setInputBoxActive(true);
  };

  if (!open) {
    return <> </>;
  }
  if (errMsg) {
    onToast({
      msg: errMsg,
      type: 'danger',
    });
    setErrMsg('');
    setIsLoading(false);
  }
  return (
    <div className={Styles.modelBg}>
      <div className={Styles.modelBox}>
        <div onClick={ahandleModalToggle} className={Styles.modelCloseBtn}>
          +
        </div>
        <form>
          <div className={Styles.teamName}>
            {teamsize != 1 ? (
              <>
                <div className={Styles.th}>Team Name</div>
                <input
                  onChange={(e) => {
                    setTeamname(e.target.value);
                  }}
                  type="text"
                  placeholder="Team Name*"
                  className={Styles.tn}
                />
                <div className={Styles.th}>Captain : You</div>
                <div className={Styles.th}>Member 1: You</div>
              </>
            ) : (
              ''
            )}
          </div>
          {teamsize == 1 ? (
            ''
          ) : (
            <>
              <div className={Styles.teamMemberBox}>
                {participant.map((item, i) => {
                  return (
                    <div key={item.id} className={Styles.teamMember}>
                      <div className={Styles.teamMemberHeading}>
                        <span>
                          Member {i + 2}/{teamsize}
                        </span>
                        <span
                          style={{ fontSize: '1.32rem', cursor: 'pointer' }}
                        >
                          <MdDelete
                            onClick={() => handleRemoveMember(item.id)}
                          />
                        </span>
                      </div>
                      <div className={Styles.teamMemberTop}>
                        <input
                          name="name"
                          defaultValue={item.name}
                          disabled
                          type="text"
                          placeholder=""
                          className={Styles.tn}
                        />
                        <select
                          name="gender"
                          disabled
                          defaultValue={item.gender}
                          className={Styles.tn}
                        >
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                          <option value="O">Other</option>
                        </select>
                        <input
                          name="phone"
                          defaultValue={item.phone}
                          disabled
                          type="number"
                          placeholder="Phone*"
                          className={Styles.tn}
                        />
                      </div>
                      <div className={Styles.teamMemberBottom}>
                        <input
                          disabled
                          name="email"
                          defaultValue={item.email}
                          type="email"
                          placeholder="Email Id*"
                          className={Styles.tn}
                        />
                        <input
                          name="whatsapp"
                          defaultValue={item.whatsapp}
                          disabled
                          type="number"
                          placeholder="Whatsapp Number*"
                          className={Styles.tn}
                        />
                      </div>
                    </div>
                  );
                })}
                {inputBoxActive ? (
                  <div className={Styles.teamMember}>
                    <div className={Styles.teamMemberHeading}>
                      Member {participant.length + 2}/{teamsize}
                      <span style={{ fontSize: '1.32rem', cursor: 'pointer' }}>
                        <MdDelete
                          onClick={() => setInputBoxActive(!inputBoxActive)}
                        />
                      </span>
                    </div>
                    <div className={Styles.teamMemberTop}>
                      <input
                        name="name"
                        value={member.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Name*"
                        className={Styles.tn}
                      />
                      <select
                        onChange={handleChange}
                        name="gender"
                        value={member.gender}
                        className={Styles.tn}
                      >
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="O">Other</option>
                      </select>
                      <input
                        name="phone"
                        value={member.phone}
                        onChange={handleChange}
                        type="number"
                        placeholder="Phone*"
                        className={Styles.tn}
                      />
                    </div>
                    <div className={Styles.teamMemberBottom}>
                      <input
                        name="email"
                        value={member.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email Id*"
                        className={Styles.tn}
                      />
                      <input
                        name="whatsapp"
                        value={member.whatsapp}
                        onChange={handleChange}
                        type="number"
                        placeholder="Whatsapp Number*"
                        className={Styles.tn}
                      />
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
              {/* <div className="hello"></div> */}
            </>
          )}
          {inputBoxActive ? (
            <button
              className="AddMore"
              type="submit"
              onClick={handleAddMember}
              value="Add Member"
            >
              Save member
            </button>
          ) : (
            ''
          )}
          {!inputBoxActive ? (
            <button
              className="AddMore"
              type="submit"
              onClick={handleIputBoxActive}
              value="Add Member"
            >
              Add more member
            </button>
          ) : (
            ''
          )}
          <button
            type="submit"
            disabled={isLoading}
            onClick={handleSubmit}
            value="Register"
            className={Styles.regBtn}
            // className={Styles.tn}
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}
