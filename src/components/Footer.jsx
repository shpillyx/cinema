import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© 2025 CinemaStar. All rights reserved.</p>
        <div className={styles.contact}>
          <p>Contact us: +380 123 456 789 | info@cinemastar.com</p>
          <p>Address: 123 Movie St, Kyiv, Ukraine</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;