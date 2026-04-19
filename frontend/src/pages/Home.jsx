import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-page fade-in">
            <section className="hero" style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 14, 0.7), rgba(18, 16, 14, 0.8)), url("/images/home-cafe-fausse.webp")' }}>
                <div className="container hero-content">
                    <h1 className="hero-title">Café Fausse</h1>
                    <p className="hero-subtitle">An unforgettable dining experience focusing on quality and creativity.</p>
                    <div className="hero-cta">
                        <Link to="/reservations" className="btn-primary">Book a Table</Link>
                        <Link to="/menu" className="btn-outline">View Menu</Link>
                    </div>
                </div>
            </section>

            <section className="info-section section">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-card">
                            <h3>Visit Us</h3>
                            <p>1234 Culinary Ave, Suite 100</p>
                            <p>Washington, DC 20002</p>
                            <p className="phone">(202) 555-4567</p>
                        </div>
                        <div className="info-card">
                            <h3>Opening Hours</h3>
                            <p>Monday–Saturday</p>
                            <p className="hours">5:00 PM – 11:00 PM</p>
                            <p>Sunday</p>
                            <p className="hours">5:00 PM – 9:00 PM</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
