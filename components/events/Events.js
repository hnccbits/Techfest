import React from 'react';
import Navbar from '../Navbar';

function Events() {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <div className="title">
          <h1>Spider 3.0</h1>
          <p>
            <span>by</span> ISTE Bits
          </p>
        </div>
        <div className="container">
          <img src="img/e1.png" alt="" />
          <div className="description">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <button type="button" className="cta">
              Register Now
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Events;
