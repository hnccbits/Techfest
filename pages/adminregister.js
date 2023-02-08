import Navbar from '../components/navbar/Navbar';

const event = () => {
  return (
    <>
      <Navbar />
      <div className="adminRegister">
        <div className="heading">
          Admin Register <img src="img/line.svg" alt="" />
        </div>
        <form>
          <span>Enter Your Club/Society Name : </span>
          <select>
            <option value="Chemical Engineering Society">
              Chemical Engineering Society
            </option>
            <option value="Electrical Engineering Society">
              Electrical Engineering Society
            </option>
            <option value="HnCC">HnCC</option>
            <option value="IETE">IETE</option>
            <option value="ISTE">ISTE</option>
            <option value="Mechanical Engineering Society">
              Mechanical Engineering Society
            </option>
            <option value="Model">Model</option>
            <option value="SAE India">SAE India</option>
          </select>
          <input type="email" placeholder="Enter your Club Email" />
          <input type="password" placeholder="Enter Password" />
          <input type="password" placeholder="Confirm Password" />

          <input type="submit" value="Sign-Up" />
        </form>
      </div>
    </>
  );
};

export default event;
