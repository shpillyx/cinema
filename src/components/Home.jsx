import MovieList from './MovieList';

function Home({ movies }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Cinema Booking</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;