const BOOKINGS_FILE = '/bookings.json';

export const getBookedSeats = async (movieId) => {
  try {
    const response = await fetch(BOOKINGS_FILE);
    const data = await response.json();
    return data.bookings[movieId] || [];
  } catch (error) {
    console.error('Помилка завантаження бронювань:', error);
    return [];
  }
};

export const saveBooking = async (movieId, seats, userData) => {
  // Логуємо дані для ручного оновлення bookings.json
  console.log(`Бронювання для фільму ${movieId}:`, { seats, userData });
};