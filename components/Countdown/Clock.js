import React from 'react';
import Styles from './Clock.module.css';
// import './CountDown.css';

export default function Clock({ Days, Hours, Minutes, Seconds }) {
  return (
    <section className={Styles.timerContainer}>
      <section className={Styles.timer}>
        <div className={Styles.clock}>
          <section className={Styles.text}>
            <p>{Days}</p>
            <span>Days</span>
          </section>
          <section>
            <p>{Hours}</p>
            <span>Hours</span>
          </section>
          <section>
            <p>{Minutes}</p>
            <span>Minutes</span>
          </section>
          <section>
            <p>{Seconds}</p>
            <span>Seconds</span>
          </section>
        </div>
      </section>
    </section>
  );
}

Clock.defaultProps = {
  Days: '00',
  Hours: '00',
  Minutes: '00',
  Seconds: '00',
};
