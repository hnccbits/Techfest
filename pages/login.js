/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useContext } from 'react';
//  import toast, { Toaster } from 'react-hot-toast';
import { toast } from 'react-toastify';
import axiosInstance from '../api/axios';
// import Navbar from '../components/navbar/Navbar';
import { AuthContext } from '../context/AuthContext';
import Styles from '../components/login/login.module.css';

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
  const [isLoading, setIsLoading] = useState(false);

  const onToast = ({ msg, type }) =>
    toast(msg, {
      position: 'bottom-right',
      theme: 'dark',
      autoClose: 6000,
      type,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value.email === '' || value.password === '') {
      setErrMsg('Must Fill All The Fields');
    } else {
      try {
        setIsLoading(true);
        const res = await axiosInstance({
          method: 'post',
          url: '/login',
          data: value,
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false,
        });
        // eslint-disable-next-line react/destructuring-assignment
        setIsLoading(false);
        login(res.data.data);
        onToast({
          msg: 'Logged In Successfully',
          type: 'success',
        });
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

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
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
      <div className={Styles.RegisterForm}>
        <div className={Styles.formHeading}>Sign In</div>
        <div className={Styles.RegisterFormWrapper}>
          <img src="img/3d_logo.svg" alt="" />
          <form>
            <div className={Styles.formLineBlock}>
              <input
                value={value.email}
                className={Styles.mail}
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="Email id *"
              />
            </div>
            <div className={Styles.formLineBlock}>
              <input
                className={Styles.mail}
                value={value.password}
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password *"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={Styles.btn}
              type="submit"
            >
              {isLoading ? 'Loading...' : 'Submit'}
            </button>
            <br />
            <button type="button" className={Styles.Already}>
              <Link href="/register" legacyBehavior>
                <a>Register</a>
              </Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
