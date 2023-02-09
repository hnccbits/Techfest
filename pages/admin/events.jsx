import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdminEventCard from '../../components/adminEventCard/AdminEventCard';
import Navbar from '../../components/navbar/Navbar';
import { AuthContext } from '../../context/AuthContext';
import axiosInstance from '../../api/axios';

const event = () => {
  const history = useRouter();

  const [clubevent, setClubevent] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance({
        method: 'get',
        url: '/admin/get/event',
      });
      setClubevent(res.data.data.event);
      console.log(clubevent);
    };
    fetchData();
  }, []);
  const deleteEventHandler = async (id) => {
    try {
      setClubevent(clubevent.filter((item) => item._id !== id));
    } catch (error) {
      history.reload();
    }
  };
  const acceptingResponseHandler = async (id) => {
    try {
      setClubevent(
        clubevent.map((item) =>
          item._id === id
            ? { ...item, registrationopen: !item.registrationopen }
            : item,
        ),
      );
      console.log(clubevent);
    } catch (error) {
      history.reload();
    }
  };
  return (
    <>
      <Navbar />
      <div className="adminEvent">
        <div className="heading">
          Admin Event Page
          <img src="img/line.svg" alt="" />
        </div>
        <div className="adminEventWrap">
          {clubevent.map(
            ({
              name: names,
              registrationopen,
              coverimg,
              participants,
              _id: id,
            }) => {
          

              return (
                <AdminEventCard
                  acceptingResponseHandler={acceptingResponseHandler}
                  deleteEventHandler={deleteEventHandler}
                  key={id}
                  id={id}
                  name={names}
                  coverimg={coverimg}
                  participants={participants}
                  registrationopen={registrationopen}
                />
              );
            },
          )}
          <div className="adminEventCard adminAddCard">
            <h2>Add Event</h2>
            <Link href="/admin/addevent" legacyBehavior>
              <a className="addEventBtn">+</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default event;
