import { FaInstagramSquare } from 'react-icons/fa';

import Link from 'next/link';
import Styles from './home.module.css';
import Card from '../card/Card';
// import { FaFacebookSquare } from 'react-icons/fa';
import axiosInstance from '../../api/axios';

const home = ({ events }) => {
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
          <Link href="/event" legacyBehavior>
            <div className={Styles.homeHeroBtn}>
              <a>View Events</a>
            </div>
          </Link>
          <div className={Styles.homeHeroSocial}>
            <Link
              href="https://www.instagram.com/techmahotsav.bits/"
              legacyBehavior
            >
              <a>
                <FaInstagramSquare size={30} />
                Instagram
              </a>
            </Link>
          </div>
        </div>
        <div className={Styles.homeHeroFrame}>
          <img src="img/heroframe.svg" alt="" />
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
            <Link href="/about" legacyBehavior>
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
        <div className={Styles.homeNeonHeading}>Sponsors</div>
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
          {/* {events && ( */}
          <div className={Styles.homeEventMiddle}>
            {events.map(
              ({ name, coverimg, registrationopen, club, desc, _id: id }) => {
                return (
                  <Card
                    key={id}
                    name={name}
                    coverimg={coverimg}
                    id={id}
                    club={club}
                    desc={desc}
                    registrationopen={registrationopen}
                  />
                );
              },
            )}
          </div>
          {/* {events && (
            <div className={Styles.homeEvent}>
              ...
              {events.map(
                ({ name, coverimg, registrationopen, club, desc, _id: id }) => {
                  return (
                    <Card
                      key={id}
                      name={name}
                      coverimg={coverimg}
                      id={id}
                      club={club}
                      desc={desc}
                      registrationopen={registrationopen}
                    />
                  );
                },
              )}
              ...
            </div>
          )} */}

          {/* )} */}
          <div className={Styles.homeEventBottom}>
            <div className={Styles.homeBtn}>
              <Link
                href="https://techmahotsav.blob.core.windows.net/data/1676303218014"
                legacyBehavior
              >
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

export async function getStaticProps() {
  const res = await axiosInstance({
    method: 'get',
    url: '/event',
    withCredentials: false,
  });

  return {
    props: {
      events: res.data.data,
    },
    revalidate: 1000,
  };
}
