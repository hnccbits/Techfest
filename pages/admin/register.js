/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/destructuring-assignment */
import Head from 'next/head';
import Link from 'next/link';
import { toast } from 'react-toastify';
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
    setIsLoading(true);
    if (
      value.email === '' ||
      value.password === '' ||
      value.cnfpassword === ''
    ) {
      setErrMsg('All the fields are required');
      return;
    }
    if (value.cnfpassword !== value.password) {
      setErrMsg('Passwords do not match');
    } else {
      try {
        setIsLoading(true);
        const res = await axiosInstance({
          method: 'post',
          url: '/admin/register',
          data: value,
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false,
        });
        onToast({
          msg: 'Admin Logged In Successfully',
          type: 'success',
        });
        const { data } = res.data;
        login(data);
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
      <Head>
        <title>Admin Register</title>
      </Head>
      {/* <Navbar /> */}
      <div className="RegisterForm">
        <div className="formHeading">Admin Register</div>
        <div className="RegisterFormWrapper">
          <img
            src="https://res.cloudinary.com/du196ag4l/image/upload/v1676122891/login_iifcfq.svg"
            alt=""
          />
          <form>
            <div className="formLineBlock">
              <h1 className="form_label">Select your club</h1>

              <select
                defaultValue={value.name}
                name="name"
                onChange={handleChange}
              >
                <option value="HNCC">HnCC</option>
                <option value="IETE">IETE</option>
                <option value="ISTE">ISTE</option>
                <option value="MODEL CLUB">Model Club</option>
                <option value="SAE">SAE India</option>
                {/*    <option value="PIES">
                  Production and Industrial Engineering Society
                </option>
                <option value="EES">Electrical Engineering Society</option>
                <option value="MES">Mechanical Engineering Society</option>
                <option value="ECES">
                  Electronics and Communication Engineering Society
                </option>
                <option value="CSEIT">CSE and IT Society</option>
                <option value="DHATVIKA">
                  Metallurgical Engineering Society
                </option>
                <option value="QUMICA">Chemical Engineering Society</option>
                <option value="SME">Mining Engineering Society</option>
                <option value="ACE">Civil Engineering Society</option>
                */}
              </select>
            </div>
            <div className="formLineBlock">
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                placeholder="Enter your Club Email"
              />
            </div>

            <ul className="field__rules">
              <li>One lowercase, One uppercase, One number</li>
              <li> One special character, 8 characters minimum</li>
            </ul>
            <div className="formLineBlock">
              <input
                required
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter Password"
              />
            </div>
            <div className="formLineBlock">
              <input
                required
                type="password"
                name="cnfpassword"
                onChange={handleChange}
                placeholder="Confirm Password"
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

            {/* <<<<<<< HEAD */}
            {/* <input type="submit" onClick={handleSubmit} /> */}
            {/* ======= */}
            {/* <input type="submit" onClick={handleSubmit} /> */}
            {/* >>>>>>> f551e8a9f6360d1ce5e98f8cac4d3e63bce29254 */}
            <span className="Already">
              Already Have Account?{' '}
              <Link href="/admin/login" legacyBehavior>
                <a>Login</a>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
