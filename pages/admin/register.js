/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/destructuring-assignment */
import { useRouter } from 'next/router';
import React, { useState, useEffect, useContext } from 'react';

import axiosInstance from '../../api/axios';

// import Navbar from '../../components/navbar/Navbar';

import { AuthContext } from '../../context/AuthContext';

function Register() {
  const history = useRouter();
  const { user, login } = useContext(AuthContext);

  useEffect(() => {
    if (user && user.admin) {
      history.push('/admin/events');
    } else if (user) {
      history.push('/event');
    }
  }, []);

  const [value, setValue] = useState({
    email: '',
    password: '',
    cnfpassword: '',
    name: 'HNCC',
  });
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value.cnfpassword !== value.password) {
      setErrMsg('Passwords do not match');
    }
    try {
      const res = await axiosInstance({
        method: 'post',
        url: '/admin/register',
        data: value,
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false,
      });
      const { data } = res.data;
      login(data);
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

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  if (errMsg) {
    //
  }
  return (
    <>
      {/* <Navbar /> */}
      <div className="adminRegister">
        <div className="heading">
          Admin Register <img src="img/line.svg" alt="" />
        </div>
        <form>
          <span>Choose Your Club/Society</span>
          <select defaultValue={value.name} name="name" onChange={handleChange}>
            <option value="CES">Chemical Engineering Society</option>
            <option value="PIES">
              Production and Industrial Engineering Society
            </option>
            <option value="EES">Electrical Engineering Society</option>
            <option value="HNCC">HnCC</option>
            <option value="IETE">IETE</option>
            <option value="ISTE">ISTE</option>
            <option value="MES">Mechanical Engineering Society</option>
            <option value="MC">Model Club</option>
            <option value="SAE">SAE India</option>
          </select>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            placeholder="Enter your Club Email"
          />
          <input
            required
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter Password"
          />
          <input
            required
            type="password"
            name="cnfpassword"
            onChange={handleChange}
            placeholder="Confirm Password"
          />

          <input type="submit" onClick={handleSubmit} />
        </form>
      </div>
    </>
  );
}

export default Register;
