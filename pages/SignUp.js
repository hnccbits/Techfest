// import React from 'react';
// import Navbar from '@/components/navbar/Navbar';
import Styles from '../components/signUp/signup.module.css';

function SignUp() {
  return (
    <>
      {/* <Navbar /> */}

      <main className={Styles.outerlayer}>
        <div className={Styles.contactcontainer}>
          <div className={Styles.Leftside}>
            <img src="img/login.svg" alt="Astronaut" />
          </div>
          <div className={Styles.Rightside}>
            <div className={Styles.headingtext}>Sign Up</div>
            <form action="#">
              <div className={Styles.formrow}>
                <div className={Styles.inputdata}>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name*"
                    className={Styles.inputbox}
                    required
                  />
                </div>
                <div className={Styles.inputdata}>
                  <select id="gender" className={Styles.inputbox} required>
                    <option value="none" selected disabled hidden>
                      Gender*
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Others</option>
                  </select>
                </div>
              </div>
              <div className={Styles.formrow}>
                <div className={Styles.inputdata}>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Id*"
                    className={Styles.inputbox}
                    required
                  />
                </div>
              </div>
              <div className={Styles.formrow}>
                <div className={Styles.inputdata}>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone Number*"
                    className={Styles.inputbox}
                    required
                  />
                </div>
                <div className={Styles.inputdata}>
                  <input
                    type="tel"
                    id="whatsappmobile"
                    placeholder="Whatsapp Number*"
                    className={Styles.inputbox}
                    required
                  />
                </div>
              </div>
              <div className={Styles.formrow}>
                <div className={Styles.inputdata}>
                  <input
                    type="text"
                    id="college"
                    placeholder="College Name*"
                    className={Styles.inputbox}
                    required
                  />
                </div>
                <div className={Styles.inputdata}>
                  <input
                    type="text"
                    id="city"
                    placeholder="College City*"
                    className={Styles.inputbox}
                    required
                  />
                </div>
              </div>
              <div className={Styles.formrow}>
                <div className={Styles.inputdata}>
                  <select id="gender" className={Styles.inputbox} required>
                    <option value="none" selected disabled hidden>
                      Branch*
                    </option>
                    <option value="CSE">Computer Science</option>
                    <option value="IT">Information Technology</option>
                    <option value="ECE">Electronics and Communication</option>
                    <option value="EE">Electrical</option>
                    <option value="MECH">Mechanical</option>
                    <option value="CHEM">Chemical</option>
                    <option value="METAL">Metallurgy</option>
                    <option value="CIVIL">Civil</option>
                    <option value="MINING">Mining</option>
                    <option value="PRODUCTION">Production</option>
                  </select>
                </div>
                <div className={Styles.inputdata}>
                  <input
                    type="number"
                    id="batch"
                    placeholder="Batch*"
                    className={Styles.inputbox}
                    required
                  />
                </div>
              </div>

              <div className={Styles.formrowbtn} id={Styles.submitbtn}>
                <div className={Styles.inputdata}>
                  <button type="submit">Register</button>
                </div>
              </div>
              <div className={Styles.logintext}>
                <p>Already Have Account? Login</p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUp;
