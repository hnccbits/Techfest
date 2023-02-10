import Link from 'next/link';
import Styles from './home.module.css';
import Card from '../../components/card/Card';

const home = () => {
  return (
    <>
      <div className={Styles.homeHero}>
        <div className={Styles.homeHeroBox}>
          <div className={Styles.homeHeroLogo}>
            <img src="img/logo.svg" alt="" />
          </div>
          <div className={Styles.homeHeroName}>
            TECH MAHOTSAV &#39;23
            <img src="img/uline.svg" alt="" className={Styles.homeHeroLine} />
          </div>
          <div className={Styles.homeHeroBtn}>
            <Link href="/" legacyBehavior>
              <a>Register Now!</a>
            </Link>
          </div>
          <div className={Styles.homeHeroSocial}>
            <i>F</i>
            <i>I</i>
            <i>L</i>
            <i>T</i>
          </div>
        </div>
        <div className={Styles.homeHeroFrame}>
          <img src="img/heroFrame.svg" alt="" />
        </div>
      </div>

      <div className={Styles.homeAbout}>
        <div className={Styles.homeLeftAbout}>
          <div className={Styles.homeHeading}>About us</div>
          <div className="homeAboutContent">
            The &#34;TECH MAHOTSAV,&#34; BIT Sindri&#39;s main technology
            festival, draws numerous attendees from various universities and
            colleges across the nation. It features many technical festivals,
            including coding competitions, development events, testing,
            exhibitions, and other thrilling activities
          </div>
          <div className={Styles.homeBtn}>
            <Link href="#" legacyBehavior>
              <a>Know More</a>
            </Link>
          </div>
        </div>
        <div className={Styles.homeRightAbout}>
          <div className={Styles.homeRightAboutImg}>
            <img src="img/logo.svg" alt="" />
          </div>
        </div>
      </div>

      <div className={Styles.homeSponser}>
        <div className={Styles.homeNeonHeading}>Sponsers</div>
        <div className={Styles.homeSponserWrapper}>
          <div className={Styles.homeSponserTop}>
            <img src="img/s3.svg" alt="" />
            <img src="img/s4.svg" alt="" />
            <img src="img/s3.svg" alt="" />
          </div>
          <div className={Styles.homeSponserMiddle}>
            <img src="img/s6.svg" alt="" />
            <img src="img/s2.svg" alt="" />
            <img src="img/s5.svg" alt="" />
            <img src="img/s1.svg" alt="" />
            <img src="img/s3.svg" alt="" />
          </div>
          <div className={Styles.homeSponserBottom}>
            <img src="img/s3.svg" alt="" />
            <img src="img/s4.svg" alt="" />
            <img src="img/s3.svg" alt="" />
          </div>
        </div>
      </div>

      <div className={Styles.homeEvent}>
        <div className={Styles.homeNeonHeading}>Events</div>
        <div className={Styles.homeEventWrapper}>
          <div className={Styles.homeEventTop}>
            <Link href="/event" legacyBehavior>
              <a>See All</a>
            </Link>
          </div>
          <div className={Styles.homeEventMiddle}>
            <Card />
            <Card />
            <Card />
          </div>
          <div className={Styles.homeEventBottom}>
            <div className={Styles.homeBtn}>
              <Link href="#" legacyBehavior>
                <a>Download Brochure</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
