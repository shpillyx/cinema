import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© 2025 CinemaStar. Усі права захищені.</p>
        <div className={styles.contact}>
          <p>Зв’язок: +380 123 456 789 | info@cinemastar.com</p>
          <p>Адреса: вул. Кіно, 123, Київ, Україна</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;