import MovieList from '../components/MovieList';
import styles from './Home.module.css';

function Home({ movies }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Зараз у прокаті</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;