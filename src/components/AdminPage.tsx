import { useEffect, useState } from 'react';

interface Booking {
  name: string;
  contact: string;
  eventType: string;
  address: string;
  eventDate: string;
  description: string;
}

interface Contact {
  name: string;
  email: string;
  message: string;
}

const AdminPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bookingsResponse, contactsResponse] = await Promise.all([
          fetch('http://localhost:5000/api/bookings'),
          fetch('http://localhost:5000/api/contacts'),
        ]);

        const bookingsData = await bookingsResponse.json();
        const contactsData = await contactsResponse.json();

        setBookings(bookingsData);
        setContacts(contactsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
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

      <h2>Contact Form Submissions</h2>
      {contacts.length === 0 ? (
        <p>No contact messages yet.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPage;
