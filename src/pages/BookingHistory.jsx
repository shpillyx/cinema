import { useState, useEffect } from 'react';
import { getBookingHistory } from '../services/BookingService';
import styles from './BookingHistory.module.css';

function BookingHistory({ movies }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(getBookingHistory());
  }, []);

  if (!history.length) {
    return <div className={styles.container}>Історія бронювань порожня.</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Історія бронювань</h1>
      <ul className={styles.historyList}>
        {history.map((entry, index) => {
          const movie = movies.find(m => m.id === parseInt(entry.movieId));
          const movieTitle = movie ? movie.title : 'Невідомий фільм';
          return (
            <li key={index} className={styles.historyItem}>
              <p><strong>Фільм:</strong> {movieTitle}</p>
              <p><strong>Місця:</strong> {entry.seats.join(', ')}</p>
              <p><strong>Ім’я:</strong> {entry.userData.name}</p>
              <p><strong>Телефон:</strong> {entry.userData.phone}</p>
              <p><strong>Email:</strong> {entry.userData.email}</p>
              <p><strong>Дата:</strong> {new Date(entry.timestamp).toLocaleString('uk-UA')}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BookingHistory;