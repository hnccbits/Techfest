import Head from 'next/head';
import Home from '../components/home/Home';

// import ComingSoon from '../components/coming_soon/ComingSoon';
// import Navbar from '../components/navbar/Navbar';
import axiosInstance from '../api/axios';

export default function home({ events }) {
  return (
    <>
      <Head>
        <title>Tech Mahotsav 23 | BIT Sindri</title>
        <meta
          name="description"
          content='The "TECH MAHOTSAV", BIT Sindri&apos;s main technology
              festival, draws numerous attendees from various universities and
              colleges across the nation. It features many technical festivals,
              including coding competitions, development events, testing,
              exhibitions, and other thrilling activities. It offers a terrific
              platform where participants from all regions of the country have
              the chance to advance and display their technological expertise.
              On a single platform, participants demonstrate their management
              and technical talents'
          key="desc"
        />
      </Head>
      <div>
        {/* <Navbar /> */}
        <Home events={events} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await axiosInstance({
    method: 'get',
    url: '/event',
    withCredentials: false,
  });
  return {
    props: {
      events: res.data.data.splice(0, 4),
    },
    revalidate: 1000,
  };
}
