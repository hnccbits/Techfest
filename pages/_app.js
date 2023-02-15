import { useEffect } from 'react';
import { useRouter } from 'next/router';

import '../components/coming_soon/ComingSoon.module.css';
import '../styles/globals.css';
import '../styles/Style.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { pageview } from '../lib/ga';

import { AuthProvider } from '../context/AuthContext';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer />
    </AuthProvider>
  );
}
