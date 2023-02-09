import React, { useState, useEffect, useContext } from 'react';
import Styles from './Model.module.css';
import { AuthContext } from '../../context/AuthContext';
import axiosInstance from '../../api/axios';

export default function Modal({ handleModalToggle, open, teamsize, id }) {
  const { user } = React.useContext(AuthContext);
  const [captainname, setCaptainname] = useState('');
  const [teamname, setTeamname] = useState('---');

  useEffect(() => {
    setCaptainname(user.name);
  }, []);

  const [participant, setParticipant] = useState([]);
  const [member, setMember] = useState({
    name: '',
    phone: '',
    email: '',
    whatsapp: '',
    gender: 'M',
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
    console.log(participant);
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
    try {
      const res = await axiosInstance({
        method: 'post',
        url: '/register/event',
        data: { teamname, participant, _id: id },
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false,
      });
      console.log(res.data);
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
    return <></>;
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
            />
            <div className={Styles.th}>Team Captain</div>
            <input type="text" disabled value={captainname} />
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
                  />
                  <select
                    onChange={handleChange}
                    name="gender"
                    value={member.gender}
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
                  />
                </div>
                <div className={Styles.teamMemberBottom}>
                  <input
                    name="email"
                    value={member.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email Id*"
                  />
                  <input
                    name="whatsapp"
                    value={member.whatsapp}
                    onChange={handleChange}
                    type="number"
                    placeholder="Whatsapp Number*"
                  />
                </div>
                {participant.length + 2 !== parseInt(teamsize, 10) ? (
                  <input
                    type="submit"
                    onClick={handleAddMember}
                    value="Add Member"
                  />
                ) : (
                  <input
                    type="submit"
                    onClick={handleSubmit}
                    value="register"
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
          />
        </form>
      </div>
    </div>
  );
}
