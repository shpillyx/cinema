import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CinemaHall from './CinemaHall';
import { saveBooking, getBookedSeats } from '../services/BookingService';
import styles from './Booking.module.css';

function Booking({ movies }) {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [userData, setUserData] = useState({ name: '', phone: '', email: '' });
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    const fetchBookedSeats = async () => {
      const seats = await getBookedSeats(id);
      setBookedSeats(seats);
    };
    fetchBookedSeats();
  }, [id]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleBooking = async () => {
    if (!selectedSeats.length) {
      toast.error('Будь ласка, виберіть хоча б одне місце!');
      return;
    }
    if (!userData.name) {
      toast.error('Будь ласка, введіть ваше ім’я!');
      return;
    }
    if (!userData.phone) {
      toast.error('Будь ласка, введіть номер телефону!');
      return;
    }
    if (!userData.email || !validateEmail(userData.email)) {
      toast.error('Будь ласка, введіть коректний email для реєстрації!');
      return;
    }

    await saveBooking(id, selectedSeats, userData);
    toast.success(`Бронювання успішне! Онови bookings.json у папці public: ${selectedSeats.join(', ')}`);
    setSelectedSeats([]);
    setUserData({ name: '', phone: '', email: '' });
  };

  if (!movie) return <div>Фільм не знайдено</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{movie.title}</h1>
      <CinemaHall
        movieId={id}
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
        bookedSeats={bookedSeats}
      />
      <div className={styles.formSection}>
        <input
          type="text"
          placeholder="Ваше ім’я"
          className={styles.input}
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Номер телефону"
          className={styles.input}
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email для реєстрації"
          className={styles.input}
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <button onClick={handleBooking} className={styles.button}>
          Зареєструвати квиток
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Booking;