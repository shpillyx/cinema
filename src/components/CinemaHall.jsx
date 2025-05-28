import { useState, useEffect } from 'react';
import { getBookedSeats } from '../services/BookingService';

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
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Select Seats</h2>
      <div className="grid grid-cols-8 gap-2">
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: seatsPerRow }).map((_, seat) => {
            const seatId = `${row}-${seat}`;
            const isBooked = bookedSeats.includes(seatId);
            const isSelected = selectedSeats.includes(seatId);
            return (
              <button
                key={seatId}
                className={`w-10 h-10 rounded ${isBooked ? 'bg-red-500' : isSelected ? 'bg-blue-500' : 'bg-green-500'} text-white`}
                onClick={() => toggleSeat(row, seat)}
                disabled={isBooked}
              >
                {row + 1}-{seat + 1}
              </button>
            );
          })
        )}
      </div>
      <p className="mt-4">Selected seats: {selectedSeats.join(', ') || 'None'}</p>
    </div>
  );
}

export default CinemaHall;