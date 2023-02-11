/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import Styles from './Model.module.css';
import { AuthContext } from '../../context/AuthContext';
import axiosInstance from '../../api/axios';

export default function Modal({ handleModalToggle, open, teamsize, id }) {
  const { user } = useContext(AuthContext);
  const [captainname, setCaptainname] = useState('');
  const [teamname, setTeamname] = useState('---');

  useEffect(() => {
    if (user) {
      setCaptainname(user.name);
    }
  }, [user]);

  const [participant, setParticipant] = useState([]);
  const [member, setMember] = useState({
    name: '',
    phone: '',
    email: '',
    whatsapp: '',
    gender: 'M',
  });
  const onToast = ({ msg, type }) =>
    toast(msg, {
      hideProgressBar: false,
      position: 'bottom-right',
      autoClose: 6000,
      type,
    });
  const handleAddMember = (e) => {
    e.preventDefault();

    setParticipant([...participant, member]);
    setMember({
      name: '',
      phone: '',
      email: '',
      whatsapp: '',
      gender: 'M',
    });
  };

  const handleChange = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    });
  };
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setParticipant([...participant, member]);
    if (teamname === '---') {
      setErrMsg('Please Enter Team Name');
      return;
    }
    if (participant.length !== teamsize - 1) {
      setErrMsg('Please Add All Members');
      return;
    }

    try {
      const res = await axiosInstance({
        method: 'post',
        url: '/register/event',
        data: { teamname, participant, _id: id },
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false,
      });
      handleModalToggle();
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

  if (!open) {
    return <> </>;
  }
  if (errMsg) {
    onToast({
      msg: errMsg,
      type: 'alert',
    });
    setErrMsg('');
  }
  return (
    <div className={Styles.modelBg}>
      <div className={Styles.modelBox}>
        <div onClick={handleModalToggle} className={Styles.modelCloseBtn}>
          +
        </div>
        <form>
          <div className={Styles.teamName}>
            <div className={Styles.th}>Team Name</div>
            <input
              onChange={(e) => {
                setTeamname(e.target.value);
              }}
              type="text"
              placeholder="Team Name*"
              className={Styles.tn}
            />
            <div className={Styles.th}>Team Captain</div>
            <input
              type="text"
              disabled
              value={captainname}
              className={Styles.cpt}
            />
          </div>
          {teamsize == 1 ? (
            ''
          ) : (
            <div className={Styles.teamMemberBox}>
              <div className={Styles.teamMember}>
                <div className={Styles.teamMemberHeading}>
                  Member {participant.length + 2}
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
                {participant.length + 2 !== parseInt(teamsize, 10) ? (
                  <input
                    type="submit"
                    onClick={handleAddMember}
                    value="Add Member"
                    className={Styles.tn}
                  />
                ) : (
                  <input
                    type="submit"
                    onClick={handleSubmit}
                    value="register"
                    className={Styles.tn}
                  />
                )}
              </div>
            </div>
          )}
          <input
            type="submit"
            onClick={handleSubmit}
            value="Register"
            className={Styles.regBtn}
            // className={Styles.tn}
          />
        </form>
      </div>
    </div>
  );
}
