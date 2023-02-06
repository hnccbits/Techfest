import Navbar from '../components/Navbar';

const event = () => {
  return (
    <>
      <Navbar />
      <div className="adminRegister">
        <div className="heading">
          User Register <img src="img/line.svg" alt="" />
        </div>
        <form>
          <input type="text" placeholder="Enter your Name" />
          <input type="email" placeholder="Enter your Email" />
          <input type="text" placeholder="Enter your Branch" />
          <input type="number" placeholder="Enter your Phone Number" />
          <input type="number" placeholder="Enter your Whatsapp Number" />
          <input type="text" placeholder="Enter your city" />
          <span>Enter Gender : </span>
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="text" placeholder="Enter your College" />
          <span>Enter Year : </span>
          <select>
            <option value="1">1st year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
          <input type="password" placeholder="Enter Password" />

          <input type="submit" value="Sign-Up" />
        </form>
      </div>
    </>
  );
};

export default event;
