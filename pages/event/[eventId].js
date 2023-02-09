import React,{useState} from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import Styles from '@/components/eventsPage/EventsPage.module.css';
import Model from '../../components/modal/Model';

import axiosInstance from '../../api/axios';
import { AuthContext } from '../../context/AuthContext';

function EventsPage({ event }) {
  const [modalopen, setModalopen] = useState(false);
  const { user } = React.useContext(AuthContext);
  const {
    name,
    desc,
    club,
    coverimg,registrationopen,
    rulebook,
    teamsize,
    _id: id,
    problemstatement
  } = event;
  const img = `https://techmahotsav.blob.core.windows.net/data/${coverimg}`;
  const rulebk = `https://techmahotsav.blob.core.windows.net/data/${rulebook}`;
  const prblmstatement = `https://techmahotsav.blob.core.windows.net/data/${problemstatement}`;

  const handleRegister = (e) => {
    e.preventDefault();
  handleModalToggle()
  };
  const handleModalToggle = () => {
  setModalopen(!modalopen)
    
  }
  return (
    <>
      <Navbar />
      <Model open={modalopen} teamsize={teamsize} id={id} handleModalToggle={handleModalToggle}/>
      <main className={Styles.mainContainer}>
        <div>
          <div className={Styles.eventTitle}>
            <h1>{name}</h1>
            <p>
              <span>by</span> {club}
            </p>
          </div>
          <div className={Styles.container}>
            <img src={img} alt="" />
            <div className={Styles.eventDescription}>
              <p>{desc}</p>
             
              <p> Max Team Size: {teamsize}</p>

              <button
                onClick={handleRegister}
                disabled={!registrationopen}
                className={Styles.cta}
                type="button"
              >
                {registrationopen? 'Register':'Registration Closed'}
              </button>

              <Link href={rulebk} target="_blank">
                <button className={Styles.cta} type="button">
                  Rulebook
                </button>
              </Link>
              {problemstatement?(
                <Link href={prblmstatement}>
                  <button className={Styles.cta} type="button">
                    Problem Statement
                  </button>
                </Link>,
              ):''}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default EventsPage;

export async function getServerSideProps({ params }) {
  const { eventId } = params;
  const res = await axiosInstance({
    method: 'get',
    url: '/event',
    withCredentials: false,
  });
  // eslint-disable-next-line no-underscore-dangle
  const d = res.data.data.filter((e) => e._id === eventId);
  return {
    props: {
      event: d[0],
    },
  };
}
