import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home({ movies }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Зараз у прокаті</h1>
      <div className={styles.movieGrid}>
        {movies.map(movie => (
          <div key={movie.id} className={styles.movieCard}>
            <img src={movie.poster} alt={movie.title} className={styles.poster} />
            <h2 className={styles.movieTitle}>{movie.title}</h2>
            <p className={styles.movieInfo}>Жанр: {movie.genre}</p>
            <p className={styles.movieInfo}>Час: {movie.showtime}</p>
            <Link to={`/booking/${movie.id}`} className={styles.bookButton}>
              Забронювати
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;