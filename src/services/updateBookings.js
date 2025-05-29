
const fs = require('fs');

// Отримати дані з LocalStorage
const bookingsFromLocalStorage = JSON.parse(localStorage.getItem('cinema_bookings') || '{}');

// Прочитати поточний bookings.json
const currentData = JSON.parse(fs.readFileSync('src/data/bookings.json', 'utf8'));

// Об'єднати з новими даними
const updatedBookings = {
  ...currentData.bookings,
  ...bookingsFromLocalStorage,
};

// Записати оновлені дані
fs.writeFileSync('src/data/bookings.json', JSON.stringify({ bookings: updatedBookings }, null, 2), 'utf8');
console.log('Бронювання оновлено в bookings.json');