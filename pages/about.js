import Head from 'next/head';
import About from '../components/about/About';

function about() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <About />
      {/* hello */}
    </>
  );
}

export default about;
