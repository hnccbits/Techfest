/* eslint-disable no-unused-vars */
import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
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
    if (
      value.name === '' ||
      value.email === '' ||
      value.password === '' ||
      value.college === '' ||
      value.city === '' ||
      value.branch === '' ||
      value.year === '' ||
      value.phone === '' ||
      value.whatsapp === ''
    ) {
      setErrMsg('All the fields are required');
    } else {
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
                required
              />
              <select
                defaultValue={value.name}
                name="gender"
                onChange={handleChange}
              >
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
                required
              />
            </div>
            <div className="line3 formLine">
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
            </div>
            <div className="line4 formLine">
              <input
                name="college"
                onChange={handleChange}
                type="text"
                placeholder="Enter your College"
                required
              />
              <input
                name="city"
                onChange={handleChange}
                type="text"
                placeholder="Enter your city"
                required
              />
            </div>
            <div className="line5 formLine">
              <input
                name="branch"
                onChange={handleChange}
                type="text"
                placeholder="Enter your Branch"
                required
              />
              <select
                defaultValue={value.name}
                name="year"
                onChange={handleChange}
              >
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
                required
              />
              {/* <ul className="field__rules">
                <li>One lowercase character</li>
                <li>One uppercase character</li>
                <li>One number</li>
                <li>One special character</li>
                <li>9 characters minimum</li>
              </ul> */}
              <div id="pwd_strength_wrap">
                <div id="passwordDescription">Password not entered</div>
                <div id="passwordStrength" className="strength0" />
                <div id="pswd_info">
                  <strong>Strong Password Tips:</strong>
                  <ul>
                    <li className="invalid" id="length">
                      At least 6 characters
                    </li>
                    <li className="invalid" id="pnum">
                      At least one number
                    </li>
                    <li className="invalid" id="capital">
                      At least one lowercase &amp; one uppercase letter
                    </li>
                    <li className="invalid" id="spchar">
                      At least one special character
                    </li>
                  </ul>
                </div>
              </div>
              <input
                name="cnfpassword"
                onChange={handleChange}
                type="password"
                placeholder="Confirm Password"
                required
              />
            </div>
            <input type="submit" onClick={handleSubmit} required />
            <span className="Already">
              Already Have Account?{' '}
              <Link href="/login" legacyBehavior>
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
