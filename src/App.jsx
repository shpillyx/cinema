import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import { movies } from './data/movies';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home movies={movies} />} />
      <Route path="/booking/:id" element={<Booking movies={movies} />} />
    </Routes>
  );
}

export default App;