import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';
import Styles from './Footer.module.css';

function Footer() {
  return (
    <>
      <div className={Styles.footer}>
        <div className={Styles.footercontainer}>
          <div className={Styles.headtitle}>
            <h2>About Us</h2>
            <img src="img/aboutuline.svg" alt="" />
            <p>
              BIT Sindri&apos;s &ldquo;TECH MAOTSAV&rdquo; is a popular tech
              festival with coding competition, development events, and
              exhibitions.
            </p>
          </div>
          <div className={Styles.sec} id={Styles.quicklinks}>
            <h2>Pages</h2>
            <img src="img/pagesuline.svg" alt="" />
            <ul>
              <li>
                <Link href="/admin/register" legacyBehavior>
                  <a>Admin Register</a>
                </Link>
              </li>
              <li>
                <Link href="/admin/login" legacyBehavior>
                  <a>Admin Login</a>
                </Link>
              </li>
              <li>
                <Link href="/event" legacyBehavior>
                  <a>Competition</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={Styles.sec} id={Styles.contactdetails}>
            <h2>BIT Sindri</h2>
            <img src="img/aboutuline.svg" alt="" />
            <p>
              BIT Sindri, The Premier Engineering College of Jharkhand,
              Department of Higher Technical Education, Government of Jharkhand.
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.copyrighttext}>
        <p>© 2023 Techfest | Powered by HnCC</p>
        <a href="https://www.instagram.com/techmahotsav.bits/ ">
          <BsInstagram />
        </a>
      </div>
    </>
  );
}

export default Footer;
