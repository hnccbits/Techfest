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
            Lorem ipsum dolor sit amet consectetur. Nisl in facilisis ultrices
            rhoncus maecenas. Augue nunc gravida risus blandit mattis eget quam.
          </p>
        </div>
        <div className={Styles.footerEvents}>
          <span className={Styles.footerHeading}>
            Events <img src="img/line.svg" alt="" />
          </span>
          <ul>
            <li>
              <Link href="#" legacyBehavior>
                <a>Workshop</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a>Speaker</a>
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
            Contact us <img src="img/line.svg" alt="" />
          </span>
          <ul>
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
          </ul>
        </div>
      </div>
      <div className={Styles.footerCopyright}>
        <div className="copyLeft">© 2022 Techfest | Powered by BIT Sindri</div>
        <div className={Styles.copyRight}>
          <Link href="#" legacyBehavior>
            <a>
              <i>F</i>
            </a>
          </Link>
          <Link href="#" legacyBehavior>
            <a>
              <i>I</i>
            </a>
          </Link>
          <Link href="#" legacyBehavior>
            <a>
              <i>Y</i>
            </a>
          </Link>
          <Link href="#" legacyBehavior>
            <a>
              <i>T</i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
