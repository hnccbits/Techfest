import Link from 'next/link';

import Styles from './Card.module.css';

function Card({ name, coverimg, club, registrationopen, desc, id }) {
  const img = `https://techmahotsav.blob.core.windows.net/data/${coverimg}`;
  const url = `/event/${id}`;
  return (
    <div className={Styles.eventCard}>
      <img src={img} alt="" />
      <div className={Styles.eventheading}>{name}</div>
      <div className={Styles.des}>
        <span className={Styles.subStr}>{desc?.substring(0, 30)}</span>
        <span>
          By <b>{club}</b>
        </span>
      </div>
      <div className={Styles.eventCardBottom}>
        <span className={Styles.regOpen}>
          {registrationopen ? 'Registration open' : 'Registration closed'}
        </span>
        <div className={Styles.cardBtn}>
          <Link href={url} legacyBehavior>
            <button type="button">Know More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
