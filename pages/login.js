/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axiosInstance from '../api/axios';
// import Navbar from '../components/navbar/Navbar';
import { AuthContext } from '../context/AuthContext';
import '../components/login/login.module.css';

function LoginPage() {
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
  });
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance({
        method: 'post',
        url: '/login',
        data: value,
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false,
      });
      toast.success('Logged In Successfully');
      // eslint-disable-next-line react/destructuring-assignment
      login(res.data.data);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg(err.response.data.error);
      } else {
        setErrMsg(err);
      }
      toast.error(errMsg);
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
        <div className="formHeading">Sign In</div>
        <div className="RegisterFormWrapper">
          <img src="img/formImg.png" alt="" />
          <form>
            <div className="formLineBlock">
              <input
                value={value.email}
                className="mail"
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="Email id *"
              />
            </div>
            <div className="formLineBlock">
              <input
                className="mail"
                value={value.password}
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password *"
              />
            </div>
            <button onClick={handleSubmit} className="btn" type="submit">
              Submit
            </button>
            <span className="Already">
              Don&#39;t Have Account?{' '}
              <Link href="/register" legacyBehavior>
                <a>Register</a>
              </Link>
            </span>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default LoginPage;
