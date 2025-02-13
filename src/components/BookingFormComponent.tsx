import { useState } from "react";
import './BookingForm.css';

const BookingFormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    eventType: "",
    address: "",
    eventDate: "",
    description: "",
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Booking submitted successfully!");
        setFormData({
          name: "",
          contact: "",
          eventType: "",
          address: "",
          eventDate: "",
          description: "",
        });
      } else {
        setStatusMessage("Error submitting booking.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("Error submitting booking.");
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Book an Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="contact"
          type="text"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <input
          name="eventType"
          type="text"
          placeholder="Event Type"
          value={formData.eventType}
          onChange={handleChange}
          required
        />
        <input
          name="address"
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          name="eventDate"
          type="date"
          value={formData.eventDate}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit Booking</button>
      </form>
      
      {statusMessage && (
        <p className={statusMessage.includes("successfully") ? "success-message" : "error-message"}>
          {statusMessage}
        </p>
      )}
    </div>
  );
};

export default BookingFormComponent;