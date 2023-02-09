import '../components/coming_soon/ComingSoon.module.css';
import '../styles/globals.css';
import '../styles/Style.css';
import { AuthProvider } from '../context/AuthContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      
    </AuthProvider>
  );
}
