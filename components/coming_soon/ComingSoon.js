import Styles from './ComingSoon.module.css';

import Countdown from '../Countdown/Countdown';

export default function ComingSoon() {
  return (
    <div className={Styles.comingSoon}>
      <div className={Styles.eventLogo}>
        <img src="img/logo.png" alt="eventLogo" />
      </div>
      <div className={Styles.eventAbout}>
        <div className={Styles.heading}>
          <span>
            TECH MAHOTSAV<i>&apos;</i> 23
          </span>
          <img src="img/uline.svg" alt="" />
        </div>
        <div className={Styles.subHeading}>Coming Soon...</div>
      </div>
      <Countdown />
    </div>
  );
}
