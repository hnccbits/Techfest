import { BsInstagram } from 'react-icons/bs';
import Link from 'next/link';
import Styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footerWrapper}>
        <div className={Styles.footerAbout}>
          <span className={Styles.footerHeading}>
            About Us
            <img src="img/line.svg" alt="" />
          </span>
          <p>
            BIT Sindri&apos;s Tech Mahotsav is a popular tech festival with
            coding competition, development events, and exhibitions.
          </p>
        </div>
        <div className={Styles.footerEvents}>
          <span className={Styles.footerHeading}>
            Links <img src="img/line.svg" alt="" />
          </span>
          <ul>
            <li>
              <Link href="/admin/login" legacyBehavior>
                <a>Admin Login</a>
              </Link>
            </li>
            <li>
              <Link href="/admin/register" legacyBehavior>
                <a>Admin Register</a>
              </Link>
            </li>
            <li>
              <Link href="/event" legacyBehavior>
                <a>Competition</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={Styles.footerContact}>
          <span className={Styles.footerHeading}>
            BIT Sindri <img src="img/line.svg" alt="" />
          </span>
          <ul>
            <li>
              BIT Sindri, The Premier Engineering College of Jharkhand,
              Department of Higher Technical Education, Government of Jharkhand.
            </li>
          </ul>
        </div>
      </div>
      <div className={Styles.footerCopyright}>
        <div className="copyLeft">© 2022 Techfest | Powered by BIT Sindri</div>
        <div className={Styles.copyRight}>
          <Link
            href="https://www.instagram.com/techmahotsav.bits/"
            legacyBehavior
          >
            <a>
              <i>
                <BsInstagram />
              </i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
