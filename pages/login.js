/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useRouter } from 'next/router';
import React, { useState, useEffect, useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axiosInstance from '../api/axios';
// import Navbar from '../components/navbar/Navbar';
import { AuthContext } from '../context/AuthContext';
import '../components/login/login.module.css';

function LoginPage() {
  const history = useRouter();
  const { user, login, message, error } = useContext(AuthContext);

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

  // const dispach = useDispatch();

  return (
    <>
      {/* <Navbar /> */}
      <div className="login-body">
        <div className="login">
          <div style={{ display: 'flex', gap: '4rem' }}>
            <div className="image" style={{ flex: 1 }}>
              {/* Your image component goes here */}
              <img src="img/login.svg" alt="" />
            </div>
            <div className="text" style={{ flex: 1, padding: '20px' }}>
              <form>
                <h2>User Login</h2>
                <div>
                  <input
                    value={value.email}
                    className="mail"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder="Email id *"
                    style={{
                      textAlign: 'left',
                      padding: '20px',
                      marginBottom: '10px',
                      color: '#fff',
                    }}
                  />
                </div>
                <div>
                  <input
                    className="mail"
                    value={value.password}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password *"
                    style={{
                      textAlign: 'left',
                      padding: '20px',
                      marginBottom: '10px',
                      color: '#000',
                    }}
                  />
                </div>
                <button onClick={handleSubmit} className="btn" type="submit">
                  Submit
                </button>
              </form>
              {/* <span></span> */}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default LoginPage;
