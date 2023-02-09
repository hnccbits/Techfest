/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/navbar/Navbar';
import axiosInstance from '../../api/axios';
import { AuthContext } from '../../context/AuthContext';

function AddEvent() {
  const router = useRouter();
  const [value, setValue] = useState({
    name: '',
    teamsize: '',
    desc: '',
    dateofevent: 'day1',
  });

  const [errMsg, setErrMsg] = useState('');
  const [coverimg, setCoverimg] = useState();
  const [rulebook, setRulebook] = useState();
  const [problemstatement, setProblemstatement] = useState();

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('coverimg', coverimg);
      formData.append('rulebook', rulebook);
      if (problemstatement) {
        formData.append('problemstatement', problemstatement);
      }
      formData.append('name', value.name);
      formData.append('teamsize', value.teamsize);
      formData.append('desc', value.desc);
      formData.append('dateofevent', value.dateofevent);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      await axiosInstance.post('/admin/add/event', formData, config);
      router.push('/admin/events');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg(err.response.data.error);
      } else {
        setErrMsg('Unknown Error');
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="eventRegister">
        <div className="heading">
          Event Register <img src="img/line.svg" alt="" />
        </div>
        <form encType="multipart/form-data">
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Event Name"
          />
          <input
            onChange={handleChange}
            name="teamsize"
            type="number"
            placeholder="Maximum Team Size"
          />
          <span>Event Description : </span>
          <textarea
            onChange={handleChange}
            name="desc"
            placeholder="Event Description"
          />
          <span>Event Date : </span>
          <select onChange={handleChange} name="dateofevent">
            <option value="day1">Day 1 (26th Feb)</option>
            <option value="day2">Day 2 (27th Feb)</option>
            <option value="day3">Day 3 (28th Feb)</option>
          </select>
          <span>Event Poster : </span>
          <div className="fileInput">
            <input
              onChange={(e) => {
                setCoverimg(e.target.files[0]);
              }}
              name="coverimg"
              type="file"
            />
          </div>
          <span>Event Rulebook : </span>
          <div className="fileInput">
            <input
              onChange={(e) => {
                setRulebook(e.target.files[0]);
              }}
              name="rulebook"
              type="file"
            />
          </div>
          <span>Problem Statement if any: </span>
          <div className="fileInput">
            <input
              onChange={(e) => {
                setProblemstatement(e.target.files[0]);
              }}
              name="problemstatement"
              type="file"
            />
          </div>

          <input type="submit" onClick={handleSubmit} value="Register Event" />
        </form>
      </div>
    </>
  );
}

export default AddEvent;
