import Card from '../components/Card';
import Navbar from '../components/Navbar';

const event = () => {
  return (
    <>
      <Navbar />
      <div className="event">
        <div className="heading">
          Competitions <img src="img/line.svg" alt="" />
        </div>
        <div className="subheading">Day 1</div>
        <div className="eventCardSection">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default event;
