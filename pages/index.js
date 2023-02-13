import Head from 'next/head';
import Home from '../components/home/Home';

// import ComingSoon from '../components/coming_soon/ComingSoon';
// import Navbar from '../components/navbar/Navbar';
import axiosInstance from '../api/axios';

export default function home({ events }) {
  return (
    <>
      <Head>
        <title>Tech Mahotsav</title>
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
      events: res.data.data.reverse().splice(0, 4),
    },
    revalidate: 1000,
  };
}
