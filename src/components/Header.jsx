import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>CinemaStar</Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/schedule" className={styles.navLink}>Schedule</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;