import Card from '@/components/card/Card';
import Navbar from '@/components/navbar/Navbar';
import Styles from '../components/card/EventCardSection.module.css';

const event = () => {
  return (
    <>
      <Navbar />
      <div className={Styles.event}>
        <div className={Styles.heading}>
          Competitions <img src="img/line.svg" alt="" />
        </div>
        <div className={Styles.subheading}>Day 1</div>
        <div className={Styles.eventCardSection}>
          <Card />
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
