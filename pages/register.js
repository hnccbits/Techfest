/* eslint-disable no-unused-vars */
import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
// import Navbar from '../components/navbar/Navbar';
import axiosInstance from '../api/axios';
import { AuthContext } from '../context/AuthContext';

function Register() {
  const history = useRouter();
  const { user, login } = useContext(AuthContext);

  useEffect(() => {
    if (user && user.admin) {
      history.push('/admin/events');
    } else if (user) {
      history.push('/event');
    }
  });
  const [value, setValue] = useState({
    email: '',
    name: '',
    college: '',
    city: '',
    branch: '',
    year: '1',
    gender: 'M',
    phone: '',
    whatsapp: '',
    password: '',
    cnfpassword: '',
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
        url: '/register',
        data: value,
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false,
      });
      login(res.data.data);
    } catch (err) {
      if (err.response?.status === 400) {
        setErrMsg(err.response.data.error);
      } else {
        setErrMsg(err);
      }
    }
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="RegisterForm">
        <div className="formHeading">Sign Up</div>
        <div className="RegisterFormWrapper">
          <img src="img/formImg.png" alt="" />
          <form>
            <div className="line1 formLine">
              <input
                name="name"
                onChange={handleChange}
                type="text"
                placeholder="Enter your Name"
              />
              <select
                defaultValue={value.name}
                name="gender"
                onChange={handleChange}
              >
                <option value="M">Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
              </select>
            </div>
            <div className="line2 formLine">
              <input
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Enter your Email"
              />
            </div>
            <div className="line3 formLine">
              <input
                name="phone"
                onChange={handleChange}
                type="number"
                placeholder="Enter your Phone Number"
              />
              <input
                name="whatsapp"
                onChange={handleChange}
                type="number"
                placeholder="Enter your Whatsapp Number"
              />
            </div>
            <div className="line4 formLine">
              <input
                name="college"
                onChange={handleChange}
                type="text"
                placeholder="Enter your College"
              />
              <input
                name="city"
                onChange={handleChange}
                type="text"
                placeholder="Enter your city"
              />
            </div>
            <div className="line5 formLine">
              <input
                name="branch"
                onChange={handleChange}
                type="text"
                placeholder="Enter your Branch"
              />
              <select defaultValue={value.name} name="year" onChange={handleChange}>
                <option value="1">1st year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
                <option value="5">5th Year</option>
              </select>
            </div>
            <div className="line6 formLine">
              <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Enter Password"
              />
              <input
                name="cnfpassword"
                onChange={handleChange}
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <input type="submit" onClick={handleSubmit} />
            <span className="Already">Already Have Account? <Link href='/login' legacyBehavior><a>Login</a></Link></span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;

