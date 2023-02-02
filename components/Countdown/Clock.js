import React from 'react';
// import './CountDown.css';

export default function Clock({ Days, Hours, Minutes, Seconds }) {
  return (
    <section className="timer-container">
      <section className="timer">
        <div className="clock">
          <section className="text">
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
