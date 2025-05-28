import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Booking from './components/Booking';

const movies = [
  { "id": 1, "title": "Інцепція", "poster": "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1", "genre": "Наукова фантастика", "showtime": "18:00", "description": "Фільм про злом думок" },
    { "id": 2, "title": "Темний лицар", "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1", "genre": "Екшн", "showtime": "20:00", "description": "Шедевр про Бетмена" },
    { "id": 3, "title": "Паразити", "poster": "https://images.unsplash.com/photo-1596163293416-62ea7cf4a8b7", "genre": "Драма", "showtime": "22:00", "description": "Корейський трилер із соціальним змістом" },
    { "id": 4, "title": "Шрек", "poster": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "genre": "Анімація", "showtime": "16:00", "description": "Смішна пригода огрів" }
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