import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieList.module.css';

function MovieList({ movies }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search by movie title..."
        className={styles.searchInput}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className={styles.grid}>
        {filteredMovies.map(movie => (
          <div key={movie.id} className={styles.card}>
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
        ))}
      </div>
    </div>
  );
}

export default MovieList;