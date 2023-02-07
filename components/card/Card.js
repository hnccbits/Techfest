import Link from 'next/link';

import Styles from './Card.module.css';

function Card() {
  return (
    <div className={Styles.eventCard}>
      <img src="img/e1.png" alt="" />
      <div className={Styles.eventheading}>Spider 3.0</div>
      <div className={Styles.des}>
        <span>lorem ipsum doler sit amet</span>
        <span>
          By <b>ISTE</b>
        </span>
      </div>
      <div className={Styles.prize}>
        <span>Prizes Worth</span>
        <div className={Styles.prizeheading}>INR 19500</div>
      </div>
      <div className={Styles.cardBtn}>
        <Link href="/EventsPage" legacyBehavior>
          <button type="button">Know More</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
