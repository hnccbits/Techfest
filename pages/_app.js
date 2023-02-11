import '../components/coming_soon/ComingSoon.module.css';
import '../styles/globals.css';
import '../styles/Style.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from '../context/AuthContext';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer />
    </AuthProvider>
  );
}
