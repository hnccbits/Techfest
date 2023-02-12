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
  const [teamname, setTeamname] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      });
      const memberlength = participant.length + 2;
      onToast({
        msg: `Member ${memberlength} added successfully`,
        type: 'success',
      });
    }
  };

  const handleChange = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      member.name === '' ||
      member.phone === '' ||
      member.phone.length !== 10 ||
      member.whatsapp === '' ||
      member.whatsapp.length !== 10 ||
      member.email === ''
    ) {
      toast({
        msg: 'Invalid data entered. please check the input.',
        type: 'danger',
      });
      return;
    }
    if (teamname === '') {
      setErrMsg('Please Enter Team Name');
      return;
    }
    setParticipant([...participant, member]);

    try {
      setIsLoading(true);
      const res = await axiosInstance({
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
      setIsLoading(false);

      handleModalToggle();
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

  if (!open) {
    return <> </>;
  }
  if (errMsg) {
    onToast({
      msg: errMsg,
      type: 'alert',
    });
    setErrMsg('');
    setIsLoading(false);
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
                  Member {participant.length + 2}/{teamsize}
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
                  <button
                    type="submit"
                    onClick={handleAddMember}
                    value="Add Member"
                    className={Styles.tn}
                  >
                    Add more member
                  </button>
                ) : (
                  ''
                )}
              </div>
            </div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            onClick={handleSubmit}
            value="Register"
            className={Styles.regBtn}
            // className={Styles.tn}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
