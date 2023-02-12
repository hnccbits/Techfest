// import Navbar from '../components/navbar/Navbar';
// import Link from 'next/link';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axiosInstance from '../api/axios';
import Styles from '../components/contactus/contact-us.module.css';

function ContactUs() {
  const [value, setValue] = useState({
    email: '',
    message: '',
    name: '',
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
    if (value.email === '' || value.message === '' || value.name === '') {
      setErrMsg('Must Fill All The Fields');
    } else {
      try {
        setIsLoading(true);
        await axiosInstance({
          method: 'post',
          url: '/contact',
          data: value,
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false,
        });
        // eslint-disable-next-line react/destructuring-assignment
        setIsLoading(false);
        onToast({
          msg: 'Message sent successfully',
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
      type: 'warn',
    });
    setErrMsg('');
    setIsLoading(false);
  }
  return (
    <>
      {/* <Navbar /> */}

      <main className={Styles.outerlayer}>
        <div className={Styles.contactcontainer}>
          <div className={Styles.headingtext}>Contact Us</div>
          <form action="#">
            <div className={Styles.formrow}>
              <div className={Styles.inputdata}>
                <input
                  type="text"
                  onChange={handleChange}
                  name="name"
                  id="name"
                  placeholder="Name*"
                  className={Styles.inputbox}
                  required
                />
              </div>
              <div className={Styles.inputdata}>
                <input
                  type="email"
                  onChange={handleChange}
                  name="email"
                  id="email"
                  placeholder="Email Id*"
                  className={Styles.inputbox}
                  required
                />
              </div>
            </div>
            <div className={Styles.formrow}>
              <div className={Styles.inputdata} id={Styles.textarea}>
                <textarea
                  cols="30"
                  rows="10"
                  onChange={handleChange}
                  name="message"
                  placeholder="Message*"
                  className={Styles.inputbox}
                  required
                />
              </div>
            </div>
            <div className={Styles.formrow} id={Styles.submitbtn}>
              <div className={Styles.inputdata}>
                {/* <Link href="/"> */}
                <button
                  disabled={isLoading}
                  type="submit"
                  onClick={handleSubmit}
                >
                  {isLoading ? 'Sending...' : 'Send'}
                </button>
                {/* </Link> */}
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default ContactUs;
