import Card from '../../components/card/Card';
import Navbar from '../../components/navbar/Navbar';
// import Styles from '../components/card/EventCardSection.module.css';

import Styles from '../../components/card/EventCardSection.module.css';
import axiosInstance from '../../api/axios';

const event = ({ events }) => {
  return (
    <>
      <Navbar />
      <div className={Styles.event}>
        <div className={Styles.heading}>
          Competitions <img src="img/line.svg" alt="" />
        </div>
        <div className={Styles.subheading}>Day 1</div>
        <div className={Styles.eventCardSection}>
          {events.map(
            ({ name, coverimg, registrationopen, club, desc, _id: id }) => {
              return (
                <Card
                  key={id}
                  name={name}
                  coverimg={coverimg}
                  id={id}
                  club={club}
                  desc={desc}
                  registrationopen={registrationopen}
                />
              );
            },
          )}
        </div>
      </div>
    </>
  );
};

export default event;

export async function getStaticProps() {
  const res = await axiosInstance({
    method: 'get',
    url: '/event',
    withCredentials: false,
  });

  return {
    props: {
      events: res.data.data,
    },
  };
}
