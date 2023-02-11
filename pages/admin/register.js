/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/destructuring-assignment */
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
      hideProgressBar: false,
      position: 'bottom-right',
      autoClose: 6000,
      type,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
      setIsLoading(false);
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
  }
  return (
    <>
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
              <select
                defaultValue={value.name}
                name="name"
                onChange={handleChange}
              >
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
            {/* <<<<<<< HEAD */}
            {/* // ======= */}
            {/* <ul className="field__rules">
                <li>One lowercase character</li>
                <li>One uppercase character</li>
                <li>One number</li>
                <li>One special character</li>
                <li>9 characters minimum</li>
              </ul> */}
            {/* >>>>>>> f551e8a9f6360d1ce5e98f8cac4d3e63bce29254 */}
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
