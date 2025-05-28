const STORAGE_KEY = 'cinema_bookings';

const getStoredBookings = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
};

const saveStoredBookings = (bookings) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
};

export const getBookedSeats = (movieId) => {
  const bookings = getStoredBookings();
  return bookings[movieId] || [];
};

export const saveBooking = (movieId, seats, userData) => {
  const bookings = getStoredBookings();
  bookings[movieId] = (bookings[movieId] || []).concat(seats);
  saveStoredBookings(bookings);
  console.log(`Booking saved for movie ${movieId}:`, { seats, userData });
};