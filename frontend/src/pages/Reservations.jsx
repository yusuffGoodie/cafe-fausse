import { useState } from 'react';
import axios from 'axios';
import './Reservations.css';

function Reservations() {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '2',
        name: '',
        email: '',
        phone: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Processing your reservation...' });

        // Combine date and time
        const timeSlot = new Date(`${formData.date}T${formData.time}:00`).toISOString();

        try {
            const response = await axios.post('http://127.0.0.1:5000/api/reservations', {
                timeSlot,
                guests: formData.guests,
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            });

            setStatus({
                type: 'success',
                message: `Success! Table ${response.data.table_number} is reserved for you.`
            });

            // Reset form
            setFormData({
                date: '',
                time: '',
                guests: '2',
                name: '',
                email: '',
                phone: ''
            });

        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setStatus({ type: 'error', message: error.response.data.error });
            } else {
                setStatus({ type: 'error', message: 'Failed to connect to the server. Please try again.' });
            }
        }
    };

    // Get minimum date (today)
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="reservations-page fade-in section container">
            <h1 className="section-title">Book a Table</h1>

            <div className="reservation-container">
                <div className="reservation-info">
                    <h2>We look forward to hosting you.</h2>
                    <p>Please note that we accept reservations up to 30 days in advance. For parties larger than 8, please contact us directly via phone.</p>
                    <div className="info-highlight">
                        <p><strong>Address:</strong> 1234 Culinary Ave, Suite 100</p>
                        <p><strong>Phone:</strong> (202) 555-4567</p>
                    </div>
                </div>

                <form className="reservation-form" onSubmit={handleSubmit}>
                    {status.message && (
                        <div className={`status-banner ${status.type}`}>
                            {status.message}
                        </div>
                    )}

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="date">Date *</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                min={today}
                                required
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="time">Time *</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                min="17:00"
                                max="23:00"
                                required
                                value={formData.time}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="guests">Number of Guests *</label>
                        <select
                            id="guests"
                            name="guests"
                            required
                            value={formData.guests}
                            onChange={handleChange}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="(Optional)"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary submit-btn">Confirm Reservation</button>
                </form>
            </div>
        </div>
    );
}

export default Reservations;
