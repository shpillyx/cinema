import { useState, useEffect } from 'react';
import { getBookedSeats } from '../services/BookingService';
import styles from './CinemaHall.module.css';

function CinemaHall({ movieId, selectedSeats, setSelectedSeats }) {
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    setBookedSeats(getBookedSeats(movieId));
  }, [movieId]);

  const toggleSeat = (row, seat) => {
    const seatId = `${row}-${seat}`;
    if (bookedSeats.includes(seatId)) return;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const rows = 5;
  const seatsPerRow = 8;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Виберіть місця</h2>
      <div className={styles.grid}>
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: seatsPerRow }).map((_, seat) => {
            const seatId = `${row}-${seat}`;
            const isBooked = bookedSeats.includes(seatId);
            const isSelected = selectedSeats.includes(seatId);
            return (
              <button
                key={seatId}
                className={`${styles.seat} ${
                  isBooked ? styles.seatBooked : isSelected ? styles.seatSelected : styles.seatAvailable
                }`}
                onClick={() => toggleSeat(row, seat)}
                disabled={isBooked}
              >
                {row + 1}-{seat + 1}
              </button>
            );
          })
        )}
      </div>
      <p className={styles.selectedSeats}>Вибрані місця: {selectedSeats.join(', ') || 'Немає'}</p>
    </div>
  );
}

export default CinemaHall;