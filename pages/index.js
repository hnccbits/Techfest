import React from 'react';
import ComingSoon from '../components/coming_soon/ComingSoon';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/navbar/Navbar';

export default function Home() {
  const { user, logout } = React.useContext(AuthContext);

  return (
    <div>
      <Navbar/>
      <ComingSoon />
    </div>
  );
}
