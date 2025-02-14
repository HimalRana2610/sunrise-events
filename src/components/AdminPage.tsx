// src/components/AdminPage.tsx
import { useEffect, useState } from 'react';

interface Booking {
  name: string;
  contact: string;
  eventType: string;
  address: string;
  eventDate: string;
  description: string;
}

const AdminPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/bookings');
        const data = await response.json();
        setBookings(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <p>Loading bookings...</p>;
  }

  return (
    <div className="admin-page">
      <h2>Booking Submissions</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Event Type</th>
              <th>Address</th>
              <th>Event Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.name}</td>
                <td>{booking.contact}</td>
                <td>{booking.eventType}</td>
                <td>{booking.address}</td>
                <td>{booking.eventDate}</td>
                <td>{booking.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPage;
