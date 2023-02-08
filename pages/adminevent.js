import Link from 'next/link';
import AdminEventCard from '../components/adminEventCard/AdminEventCard';
import Navbar from '../components/navbar/Navbar';

const event = () => {
  return (
    <>
      <Navbar />
      <div className="adminEvent">
        <div className="heading">
          Admin Event Page
          <img src="img/line.svg" alt="" />
        </div>
        <div className="adminEventWrap">
          <AdminEventCard />
          <AdminEventCard />
          <AdminEventCard />
          <AdminEventCard />

          <div className="adminEventCard adminAddCard">
            <h2>Add Event</h2>
            <Link href="/EventRegister" legacyBehavior>
              <a className="addEventBtn">+</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default event;
