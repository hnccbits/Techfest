import Navbar from '../components/Navbar';

const event = () => {
  return (
    <>
      <Navbar />
      <div className="eventRegister">
        <div className="heading">
          Event Register <img src="img/line.svg" alt="" />
        </div>
        <form>
          <input type="text" placeholder="Event Name" />
          <input type="number" placeholder="Maximum Team Size" />
          <span>Event Description : </span>
          <textarea placeholder="Event Description" />
          <span>Event Date : </span>
          <select>
            <option value="day1">Day 1 (26th Feb)</option>
            <option value="day2">Day 2 (27th Feb)</option>
            <option value="day3">Day 3 (28th Feb)</option>
          </select>
          <span>Event Poster : </span>
          <div className="fileInput">
            <input type="file" />
          </div>
          <span>Event Rulebook : </span>
          <div className="fileInput">
            <input type="file" />
          </div>
          <span>Event Prize Pool : </span>
          <input type="number" placeholder="Prizes Worth" />
          <input type="submit" value="Register Event" />
        </form>
      </div>
    </>
  );
};

export default event;
