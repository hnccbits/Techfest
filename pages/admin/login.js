/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useContext } from 'react';
// import toast, { Toaster } from 'react-hot-toast';

import { toast } from 'react-toastify';
import axiosInstance from '../../api/axios';
// import Navbar from '../../components/navbar/Navbar';
import { AuthContext } from '../../context/AuthContext';

function AdminLoginPage() {
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
  const [isLoading, setIsLoading] = useState(false);

  const onToast = ({ msg, type }) =>
    toast(msg, {
      hideProgressBar: false,
      position: 'bottom-right',
      autoClose: 6000,
      type,
    });

  const ahandleSubmit = async (e) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance({
        method: 'post',
        url: '/admin/login',
        data: value,
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false,
      });
      onToast({
        msg: 'Admin Logged In Successfully',
        type: 'success',
      });
      // toast.success('Logged In Successfully');
      // eslint-disable-next-line react/destructuring-assignment
      login(res.data.data);
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
      // toast.error(errMsg);
    }
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.email === '' || value.password === '') {
      setErrMsg('Must Fill All the fields');
    } else {
      ahandleSubmit();
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
      <div className="RegisterForm">
        <div className="formHeading">Admin Login</div>
        <div className="RegisterFormWrapper">
          <img
            src="https://res.cloudinary.com/du196ag4l/image/upload/v1676122891/login_iifcfq.svg"
            alt=""
          />
          <form>
            <div className="formLineBlock">
              <input
                className="mail"
                name="email"
                type="email"
                value={value.email}
                onChange={handleChange}
                placeholder="Email id *"
              />
            </div>
            <div className="formLineBlock">
              <input
                className="mail"
                name="password"
                type="password"
                value={value.password}
                onChange={handleChange}
                placeholder="Password *"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="btn"
              type="submit"
            >
              {isLoading ? 'Loading...' : 'Submit'}
            </button>
            <span className="Already">
              Don&#39;t Have Account?{' '}
              <Link href="/admin/register" legacyBehavior>
                <a>Register</a>
              </Link>
            </span>
          </form>
        </div>
      </div>
      {/* <Toaster /> */}
    </>
  );
}

export default AdminLoginPage;
