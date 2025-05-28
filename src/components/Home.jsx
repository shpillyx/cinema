import MovieList from './MovieList';
import styles from './Home.module.css';

function Home({ movies }) {
  return (
    <div>
      <h1 className={styles.title}>Cinema Booking</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;