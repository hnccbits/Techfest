/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Navbar from '../../../components/navbar/Navbar';
import axiosInstance from '../../../api/axios';
import { AuthContext } from '../../../context/AuthContext';

function Eventedit({ eventId }) {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const [errMsg, setErrMsg] = useState('');
  const [coverimg, setCoverimg] = useState();
  const [rulebook, setRulebook] = useState();
  const [problemstatement, setProblemstatement] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const onToast = ({ msg, type }) =>
    toast(msg, {
      hideProgressBar: false,
      position: 'bottom-right',
      autoClose: 6000,
      type,
    });

  const [clubevent, setClubevent] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance({
          method: 'get',
          url: '/event',
        });
        setIsLoading(false);
        const d = res.data.data.filter((e) => e._id === eventId);
        setClubevent(d[0]);
      } catch (err) {
        if (!err?.response) {
          setErrMsg('No Internet connection');
        } else if (err.response?.status === 400) {
          setErrMsg(err.response.data.error);
        } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
        } else {
          setErrMsg('Fetching Event Data Failed');
        }
      }
    };

    if (!user || (user && !user.admin)) {
      router.push('/admin/login');
    } else {
      fetchData();
    }
  }, [eventId]);

  const handleChange = (e) => {
    setClubevent({
      ...clubevent,
      [e.target.name]: e.target.value,
    });
  };

  const ahandleSubmit = async (e) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      if (problemstatement) {
        formData.append('problemstatement', problemstatement);
      }
      if (coverimg) {
        formData.append('coverimg', coverimg);
      }
      if (rulebook) {
        formData.append('rulebook', rulebook);
      }
      formData.append('name', clubevent.name);
      formData.append('teamsize', clubevent.teamsize);
      formData.append('desc', clubevent.desc);
      formData.append('dateofevent', clubevent.dateofevent);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      const res = await axiosInstance.patch(
        `/admin/update/event/${clubevent._id}`,
        formData,
        config,
      );
      setIsLoading(false);
      router.push('/admin/events');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Internet connection');
      } else if (err.response?.status === 400) {
        setErrMsg(err.response.data.error);
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Event Update Failed');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      clubevent.name === '' ||
      clubevent.teamsize === '' ||
      clubevent.desc === '' ||
      clubevent.dateofevent === ''
    ) {
      setErrMsg('All the fields are must required');
    } else {
      ahandleSubmit();
    }
  };

  if (!clubevent) return <p>loading</p>;
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
      <div className="eventRegister">
        <div className="heading">
          Edit Event <img src="img/line.svg" alt="" />
        </div>
        <form encType="multipart/form-data" className="adminEventAddForm">
          <input
            onChange={handleChange}
            value={clubevent.name}
            name="name"
            type="text"
            placeholder="Event Name"
          />
          <input
            value={clubevent.teamsize}
            onChange={handleChange}
            name="teamsize"
            type="number"
            placeholder="Maximum Team Size"
          />
          <span>Event Description : </span>
          <textarea
            value={clubevent.desc}
            onChange={handleChange}
            name="desc"
            placeholder="Event Description"
          />
          <span>Event Date : </span>

          <select
            onChange={handleChange}
            value={clubevent.dateofevent}
            name="dateofevent"
          >
            <option value="day1">Day 1 (26th Feb)</option>
            <option value="day2">Day 2 (27th Feb)</option>
            <option value="day3">Day 3 (28th Feb)</option>
          </select>
          <span>
            Leave the fields below blank if you dont wish to edit them
          </span>
          <br />
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
          <span>Problem Statement : </span>
          <div className="fileInput">
            <input
              onChange={(e) => {
                setProblemstatement(e.target.files[0]);
              }}
              name="problemstatement"
              type="file"
            />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            onClick={handleSubmit}
            value="Submit"
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </form>
      </div>
    </>
  );
}

export default Eventedit;

export async function getServerSideProps({ params }) {
  const { eventId } = params;
  return {
    props: {
      eventId,
    },
  };
}
