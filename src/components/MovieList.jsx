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
        placeholder="Пошук за назвою фільму..."
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
              <p className={styles.info}>Жанр: {movie.genre}</p>
              <p className={styles.info}>Час сеансу: {movie.showtime}</p>
              <Link to={`/booking/${movie.id}`} className={styles.button}>
                Забронювати
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;