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
            Lorem ipsum dolor sit amet consectetur. Nisl in facilisis ultrices
            rhoncus maecenas. Augue nunc gravida risus blandit mattis eget quam.
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

// import Link from 'next/link';
// import { BsInstagram } from 'react-icons/bs';
// import Styles from './Footer.module.css';

// function Footer() {
//   return (
//     <>
//       <div className={Styles.footer}>
//         <div className={Styles.footercontainer}>
//           <div className={Styles.headtitle}>
//             <h2>About Us</h2>
//             <img src="img/aboutuline.svg" alt="" />
//             <p>
//               BIT Sindri&apos;s &ldquo;TECH MAOTSAV&rdquo; is a popular tech
//               festival with coding competition, development events, and
//               exhibitions.
//             </p>
//           </div>
//           <div className={Styles.sec} id={Styles.quicklinks}>
//             <h2>Pages</h2>
//             <img src="img/pagesuline.svg" alt="" />
//             <ul>
//               <li>
//                 <Link href="/admin/register" legacyBehavior>
//                   <a>Admin Register</a>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/admin/login" legacyBehavior>
//                   <a>Admin Login</a>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/event" legacyBehavior>
//                   <a>Competition</a>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className={Styles.sec} id={Styles.contactdetails}>
//             <h2>BIT Sindri</h2>
//             <img src="img/aboutuline.svg" alt="" />
//             <p>
//               BIT Sindri, The Premier Engineering College of Jharkhand,
//               Department of Higher Technical Education, Government of Jharkhand.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className={Styles.copyrighttext}>
//         <p>&copy; 2023 Techfest | Powered by BIT Sindri</p>
//         <a href="https://www.instagram.com/techmahotsav.bits/ ">
//           <BsInstagram />
//         </a>
//       </div>
//     </>
//   );
// }

// export default Footer;
