import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CinemaHall from './CinemaHall';
import styles from './Booking.module.css';

function Booking({ movies }) {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [userData, setUserData] = useState({ name: '', phone: '', email: '' });

  const handleBooking = () => {
    if (!selectedSeats.length) {
      toast.error('Please select at least one seat');
      return;
    }
    toast.success('Booking successful!');
    setSelectedSeats([]);
    setUserData({ name: '', phone: '', email: '' });
  };

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{movie.title}</h1>
      <CinemaHall movieId={id} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
      <div className={styles.formSection}>
        <input
          type="text"
          placeholder="Name"
          className={styles.input}
          value={userData.name}
          onChange={e => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          className={styles.input}
          value={userData.phone}
          onChange={e => setUserData({ ...userData, phone: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          value={userData.email}
          onChange={e => setUserData({ ...userData, email: e.target.value })}
        />
        <button onClick={handleBooking} className={styles.button}>
          Book Now
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Booking;