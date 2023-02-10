/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
// import Navbar from '../components/navbar/Navbar';
import toast, { Toaster } from 'react-hot-toast';
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
      toast.success('Logged In Successfully');
    } catch (err) {
      if (err.response?.status === 400) {
        setErrMsg(err.response.data.error);
      } else {
        setErrMsg(err);
      }
      // console.log(err.response);
      // toast.error(err.response);
    }
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  // const show = () => {
  //   taost.success('Hello');
  // };

  return (
    <>
      {/* <Navbar /> */}
      <div className="adminRegister">
        <div className="heading">
          User Register <img src="img/line.svg" alt="" />
        </div>
        <form>
          <input
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Enter your Name"
            required
          />
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Enter your Email"
            required
          />
          <input
            name="college"
            onChange={handleChange}
            type="text"
            placeholder="Enter your College"
            required
          />
          <input
            name="branch"
            onChange={handleChange}
            type="text"
            placeholder="Enter your Branch"
            required
          />
          <input
            name="phone"
            onChange={handleChange}
            type="number"
            placeholder="Enter your Phone Number"
            required
          />
          <input
            name="whatsapp"
            onChange={handleChange}
            type="number"
            placeholder="Enter your Whatsapp Number"
            required
          />
          <input
            name="city"
            onChange={handleChange}
            type="text"
            placeholder="Enter your city"
            required
          />
          <span>Enter Gender : </span>
          <select
            defaultValue={value.name}
            name="gender"
            onChange={handleChange}
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </select>

          <span>Enter Year : </span>
          <select defaultValue={value.name} name="year" onChange={handleChange}>
            <option value="1">1st year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
            <option value="5">5th Year</option>
          </select>
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Enter Password"
            pattern="^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{9,}$"
            required
          />
          <input
            name="cnfpassword"
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
          />
          <input type="submit" onClick={handleSubmit} />
          <Toaster />
        </form>
      </div>
    </>
  );
}

export default Register;
