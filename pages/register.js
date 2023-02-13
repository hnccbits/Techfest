/* eslint-disable no-unused-vars */
import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
// import Navbar from '../components/navbar/Navbar';
import axiosInstance from '../api/axios';
import { AuthContext } from '../context/AuthContext';
import Styles from '../components/signUp/signup.module.css';

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
      position: 'bottom-right',
      theme: 'dark',
      autoClose: 6000,
      type,
    });
  const ahandleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance({
        method: 'post',
        url: '/register',
        data: value,
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false,
      });
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    } else if (value.phone.length !== 10 || value.whatsapp.length !== 10) {
      onToast({
        msg: 'Phone/whatsapp number should be 10 digit',
        type: 'warn',
      });
    } else if (value.cnfpassword !== value.password) {
      onToast({
        msg: 'Passwords do not match',
        type: 'warn',
      });
    } else if (value.password.length < 7) {
      onToast({
        msg: 'Password should be atleast 7 characters',
        type: 'warn',
      });
    } else {
      ahandleSubmit();
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
      <main className={Styles.outerlayer}>
        <div className={Styles.contactcontainer}>
          <div className={Styles.Leftside}>
            <img src="img/3d_logo.svg" alt="Astronaut" />
          </div>
          <div className={Styles.Rightside}>
            <div className={Styles.headingtext}>Sign Up</div>
            <form>
              {/* <div className="RegisterForm">
        <div className="formHeading">Sign Up</div>
        <div className="RegisterFormWrapper">
          <img src="img/formImg.png" alt="" />
          <form> */}
              {/* <div className="line1 formLine">
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
            </div> */}
              <div className={Styles.formrow}>
                <div className={Styles.inputdata}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name*"
                    className={Styles.inputbox}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={Styles.inputdata}>
                  <select
                    id="gender"
                    className={Styles.inputbox}
                    defaultValue={value.name}
                    name="gender"
                    onChange={handleChange}
                    required
                  >
                    <option value="none" selected disabled hidden>
                      Gender*
                    </option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Others</option>
                  </select>
                </div>
              </div>
              <div className={Styles.formrow}>
                <div className={Styles.inputdata}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Id*"
                    className={Styles.inputbox}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={Styles.formrow}>
                <div className={Styles.inputdata}>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number*"
                    className={Styles.inputbox}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={Styles.inputdata}>
                  <input
                    type="number"
                    name="whatsapp"
                    placeholder="Whatsapp Number*"
                    className={Styles.inputbox}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={Styles.formrow}>
                <div className={Styles.inputdata}>
                  <input
                    type="text"
                    name="college"
                    placeholder="College Name*"
                    className={Styles.inputbox}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={Styles.inputdata}>
                  <input
                    type="text"
                    name="city"
                    placeholder="College City*"
                    className={Styles.inputbox}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={Styles.formrow}>
                <div className={Styles.inputdata}>
                  <select
                    name="year"
                    defaultValue={value.name}
                    className={Styles.inputbox}
                    onChange={handleChange}
                    required
                  >
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="5">5th Year</option>
                  </select>
                </div>
                <div className={Styles.inputdata}>
                  <input
                    type="text"
                    defaultValue={value.name}
                    onChange={handleChange}
                    name="branch"
                    placeholder="Enter your Branch*"
                    className={Styles.inputbox}
                    required
                  />
                </div>
              </div>
              <div className={Styles.inputdata}>
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="Enter Password"
                  required
                />

                <input
                  name="cnfpassword"
                  onChange={handleChange}
                  type="password"
                  placeholder="Confirm Password"
                  required
                  className={Styles.inputdata}
                />
              </div>
              <div className={Styles.formrowbtn} id={Styles.submitbtn}>
                <div className={Styles.inputdata}>
                  <button
                    type="submit"
                    disabled={isLoading}
                    onClick={handleSubmit}
                  >
                    {isLoading ? 'Loading...' : 'Submit'}
                  </button>
                  <div className={Styles.logintext.submitRow}>
                    <span className={Styles.Already}>
                      Already Have Account?
                      <Link href="/login" legacyBehavior>
                        <a>Login</a>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Register;
