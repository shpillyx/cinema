const BOOKINGS_FILE = '/bookings.json';

export const getBookedSeats = async (movieId) => {
  try {
    const response = await fetch(BOOKINGS_FILE);
    if (!response.ok) {
      throw new Error(`Не вдалося завантажити bookings.json. Статус: ${response.status}`);
    }
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Отримано не JSON-відповідь. Перевір, чи файл bookings.json існує в папці public.');
    }
    const data = await response.json();
    return data.bookings[movieId] || [];
  } catch (error) {
    console.error('Помилка завантаження бронювань:', error.message);
    return [];
  }
};

export const saveBooking = async (movieId, seats, userData) => {
  console.log(`Бронювання для фільму ${movieId}:`, { seats, userData });
};