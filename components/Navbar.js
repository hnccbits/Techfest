import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/Event" legacyBehavior>
        <a>Events</a>
      </Link>
      <Link href="/register" legacyBehavior>
        <a>Register</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About Us</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a>Contact Us</a>
      </Link>
    </div>
  );
}
