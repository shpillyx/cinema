import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>CinemaStar</Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Головна</Link>
          <Link to="/schedule" className={styles.navLink}>Розклад</Link>
          <Link to="/history" className={styles.navLink}>Історія бронювань</Link>
          <Link to="/contact" className={styles.navLink}>Контакти</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;