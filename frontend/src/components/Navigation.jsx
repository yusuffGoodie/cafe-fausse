import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.css';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { path: '/', label: 'Home' },
        { path: '/menu', label: 'Menu' },
        { path: '/reservations', label: 'Reservations' },
        { path: '/about', label: 'About Us' },
        { path: '/gallery', label: 'Gallery' },
    ];

    return (
        <header className="navbar">
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    <h1>Café Fausse</h1>
                </Link>
                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? '✕' : '☰'}
                </button>
                <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={location.pathname === link.path ? 'active' : ''}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Navigation;
