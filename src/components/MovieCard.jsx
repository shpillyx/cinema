import { Link } from 'react-router-dom';
import styles from './MovieList.module.css';

function MovieCard({ movie }) {
  return (
    <div className={styles.card}>
      <img src={movie.poster} alt={movie.title} className={styles.poster} />
      <div className={styles.content}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p className={styles.description}>{movie.description}</p>
        <p className={styles.info}>Genre: {movie.genre}</p>
        <p className={styles.info}>Showtime: {movie.showtime}</p>
        <Link to={`/booking/${movie.id}`} className={styles.button}>
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;