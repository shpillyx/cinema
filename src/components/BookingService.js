const bookings = {};

export const getBookedSeats = (movieId) => {
  return bookings[movieId] || [];
};

export const saveBooking = (movieId, seats, userData) => {
  bookings[movieId] = (bookings[movieId] || []).concat(seats);
  console.log(`Booking saved for movie ${movieId}:`, { seats, userData });
};