import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Booking from './pages/Booking';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/shpillyx/cinema-movies/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error('Помилка завантаження фільмів:', error));
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/booking/:id" element={<Booking movies={movies} />} />
          <Route path="/schedule" element={<div>Сторінка розкладу (у розробці)</div>} />
          <Route path="/contact" element={<div>Сторінка контактів (у розробці)</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;