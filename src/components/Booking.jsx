import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CinemaHall from './CinemaHall';

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
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <CinemaHall movieId={id} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
      <div className="mt-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded mb-2"
          value={userData.name}
          onChange={e => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          className="w-full p-2 border rounded mb-2"
          value={userData.phone}
          onChange={e => setUserData({ ...userData, phone: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-2"
          value={userData.email}
          onChange={e => setUserData({ ...userData, email: e.target.value })}
        />
        <button onClick={handleBooking} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Book Now
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Booking;