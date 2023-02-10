import Navbar from '../components/navbar/Navbar';
import Styles from '../components/contactus/contact-us.module.css';

function ContactUs() {
  return (
    <>
      <Navbar />

      <main className={Styles.outerlayer}>
        <div className={Styles.contactcontainer}>
          <div className={Styles.headingtext}>Contact Us</div>
          <form action="#">
            <div className={Styles.formrow}>
              <div className={Styles.inputdata}>
                <input
                  type="text"
                  id="fname"
                  placeholder="First Name*"
                  className={Styles.inputbox}
                  required
                />
              </div>
              <div className={Styles.inputdata}>
                <input
                  type="text"
                  id="lname"
                  placeholder="Last Name*"
                  className={Styles.inputbox}
                  required
                />
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
              <div className={Styles.inputdata}>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number*"
                  className={Styles.inputbox}
                  required
                />
              </div>
            </div>
            <div className={Styles.formrow}>
              <div className={Styles.inputdata} id={Styles.textarea}>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message*"
                  className={Styles.inputbox}
                  required
                />
              </div>
            </div>
            <div className={Styles.formrow} id={Styles.submitbtn}>
              <div className={Styles.inputdata}>
                <button type="submit">Send</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default ContactUs;
