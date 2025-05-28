import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Booking from './components/Booking';

const movies = [
  { id: 1, title: 'Movie 1', poster: 'https://via.placeholder.com/300x400', genre: 'Action', showtime: '18:00', description: 'Great action movie' },
  { id: 2, title: 'Movie 2', poster: 'https://via.placeholder.com/300x400', genre: 'Comedy', showtime: '20:00', description: 'Funny comedy' },
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home movies={movies} />} />
      <Route path="/booking/:id" element={<Booking movies={movies} />} />
    </Routes>
  );
}

export default App;