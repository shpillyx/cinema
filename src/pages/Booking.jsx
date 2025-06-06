import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CinemaHall from '../components/CinemaHall';
import { saveBooking, getBookedSeats } from '../services/BookingService';
import styles from './Booking.module.css';

function Booking({ movies }) {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [userData, setUserData] = useState({ name: '', phone: '', email: '' });
  const [bookedSeats, setBookedSeats] = useState([]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleBooking = () => {
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

    saveBooking(id, selectedSeats, userData);
    setBookedSeats(getBookedSeats(id)); // Оновлюємо заброньовані місця
    toast.success(`Бронювання успішне! Ви забронювали місця: ${selectedSeats.join(', ')}`);
    setSelectedSeats([]); // Очищаємо вибрані місця
    setUserData({ name: '', phone: '', email: '' }); // Очищаємо форму
  };

  if (!movie) return <div>Фільм не знайдено</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{movie.title}</h1>
      <CinemaHall
        movieId={id}
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
        onBookingSuccess={() => setBookedSeats(getBookedSeats(id))}
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