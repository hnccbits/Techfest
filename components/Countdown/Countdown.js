import React, { useState, useEffect } from 'react';
import Clock from './Clock';
// import './CountDown.css';

export default function Countdown() {
  const [Days, setDays] = useState();
  const [Hours, setHours] = useState();
  const [Minutes, setMinutes] = useState();
  const [Seconds, setSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date('Feburary 23, 2023 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div>
      <Clock Days={Days} Hours={Hours} Minutes={Minutes} Seconds={Seconds} />
    </div>
  );
}
