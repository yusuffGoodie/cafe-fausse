import { useState } from 'react';
import axios from 'axios';
import './Footer.css';

function Footer() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
            // Pointing to Flask on port 5000
            const response = await axios.post('http://127.0.0.1:5000/api/newsletter', { email });
            setStatus(response.data.message || 'Subscribed successfully!');
            setEmail('');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setStatus(error.response.data.error);
            } else {
                setStatus('An error occurred. Please try again.');
            }
        }
    };

    return (
        <footer className="footer section">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3>Café Fausse</h3>
                    <p>1234 Culinary Ave, Suite 100<br />Washington, DC 20002</p>
                    <p>Phone: (202) 555-4567</p>
                </div>
                <div className="footer-col">
                    <h3>Hours</h3>
                    <p>Mon - Sat: 5:00 PM – 11:00 PM</p>
                    <p>Sun: 5:00 PM – 9:00 PM</p>
                </div>
                <div className="footer-col newsletter-col">
                    <h3>Newsletter</h3>
                    <p>Subscribe for exclusive updates.</p>
                    <form className="newsletter-form" onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit" className="btn-primary">Subscribe</button>
                    </form>
                    {status && <p className="newsletter-status">{status}</p>}
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Café Fausse. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
