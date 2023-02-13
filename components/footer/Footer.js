import Link from 'next/link';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';
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
            BIT Sindri&apos;s &ldquo;TECH MAOTSAV&rdquo; is a popular tech
            festival with coding competition, development events, and
            exhibitions.
          </p>
        </div>
        <div className={Styles.footerEvents}>
          <span className={Styles.footerHeading}>
            Events <img src="img/line.svg" alt="" />
          </span>
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
              <Link href="#" legacyBehavior>
                <a>Competition</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={Styles.footerContact}>
          <span className={Styles.footerHeading}>
            BIT SINDRI <img src="img/line.svg" alt="" />
          </span>
          {/* <ul>
            <li>
              <Link href="#" legacyBehavior>
                <a>Instagram</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a>Facebook</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a>Linkedin</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a>Twitter</a>
              </Link>
            </li>
          </ul> */}
          <p>
            BIT Sindri, The Premier Engineering College of Jharkhand, Department
            of Higher Technical Education, Government of Jharkhand.
          </p>
        </div>
      </div>
      <div className={Styles.footerCopyright}>
        <div className="copyLeft">© 2023 Techfest | Powered by HnCC</div>
        <div className={Styles.copyRight}>
          <Link
            href="https://www.facebook.com/hnccbits?mibextid=ZbWKwL"
            legacyBehavior
          >
            <a>
              <i>
                {' '}
                <FaFacebookSquare />
              </i>
            </a>
          </Link>
          <Link
            href="https://instagram.com/hnccbits?igshid=ZDdkNTZiNTM= "
            legacyBehavior
          >
            <a>
              <i>
                <FaInstagramSquare />
              </i>
            </a>
          </Link>
          <Link
            href="https://www.linkedin.com/company/hnccbits/"
            legacyBehavior
          >
            <a>
              <i>
                <FaLinkedin />
              </i>
            </a>
          </Link>
          <Link
            href="https://twitter.com/hnccbits?t=4Yt5VzPdz5-Khm18clM5EQ&s=09 "
            legacyBehavior
          >
            <a>
              <i>
                <FaTwitterSquare />
              </i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
