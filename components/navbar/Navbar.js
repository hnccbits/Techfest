/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AuthContext } from '../../context/AuthContext';
import Styles from './Navbar.module.css';

export default function Navbar() {
  const { user, logout } = React.useContext(AuthContext);

  const exit = () => {
    logout();
  };
  const [header, setHeader] = useState();

  const userloggedin = (
    <div className={Styles.navbar}>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/event" legacyBehavior>
        <a>Events</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About Us</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a>Contact Us</a>
      </Link>
      <a onClick={exit}>Log out</a>
    </div>
  );

  const adminloggedin = (
    <div className={Styles.navbar}>
      <Link href="/admin/events" legacyBehavior>
        <a>Club Events</a>
      </Link>

      <a onClick={exit}>Log out</a>
    </div>
  );
  const notloggedin = (
    <div className={Styles.navbar}>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/event" legacyBehavior>
        <a>Events</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About Us</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a>Contact Us</a>
      </Link>
      <Link href="/login" legacyBehavior>
        <a>Login</a>
      </Link>
      <Link href="/register" legacyBehavior>
        <a>Register</a>
      </Link>
      <Link href="/admin/login" legacyBehavior>
        <a>Admin Login</a>
      </Link>
    </div>
  );

  useEffect(() => {
    if (user && user.admin) {
      setHeader(adminloggedin);
    }
    if (user && !user.admin) {
      setHeader(userloggedin);
    }
    if (!user) {
      setHeader(notloggedin);
    }
  }, [user]);

  return header;
}
