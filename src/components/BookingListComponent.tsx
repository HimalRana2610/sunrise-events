import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookingListComponent = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/bookings");
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setStatusMessage("Failed to load bookings.");
      }
    };

    fetchBookings();
  }, []);

  const handleDelete = async (bookingId: string) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        const response = await fetch(`http://localhost:5000/api/bookings/${bookingId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setBookings(bookings.filter((booking) => booking._id !== bookingId));
          setStatusMessage("Booking deleted successfully.");
        } else {
          setStatusMessage("Error deleting booking.");
        }
      } catch (error) {
        console.error("Error deleting booking:", error);
        setStatusMessage("Error deleting booking.");
      }
    }
  };

  return (
    <div>
      <h2>All Bookings</h2>
      {statusMessage && <p>{statusMessage}</p>}
      {bookings.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Event Type</th>
              <th>Event Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.name}</td>
                <td>{booking.contact}</td>
                <td>{booking.eventType}</td>
                <td>{new Date(booking.eventDate).toLocaleDateString()}</td>
                <td>
                  <Link to={`/edit-booking/${booking._id}`} className="btn btn-primary btn-sm me-2">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(booking._id)} className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings available.</p>
      )}
    </div>
  );
};

export default BookingListComponent;
