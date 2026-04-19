import { useState } from 'react';
import './Gallery.css';

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: '/images/gallery-cafe-interior.webp', alt: 'Cafe Interior Ambiance' },
        { src: '/images/gallery-ribeye-steak.webp', alt: 'Ribeye Steak' },
        { src: '/images/gallery-special-event.webp', alt: 'Special Event Setup' },
        { src: '/images/home-cafe-fausse.webp', alt: 'Entrance and Dining Room' },
        { src: '/images/menu_caesar_salad_1776512007634.png', alt: 'Caesar Salad' },
        { src: '/images/menu_bruschetta_1776511767060.png', alt: 'Bruschetta Starter' },
        { src: '/images/menu_espresso_1776512291883.png', alt: 'Classic Espresso' }
    ];

    return (
        <div className="gallery-page fade-in section container">
            <h1 className="section-title">Gallery & Reviews</h1>

            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => setSelectedImage(img)}
                    >
                        <img src={img.src} alt={img.alt} loading="lazy" />
                        <div className="overlay">
                            <span>View Image</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedImage(null)}>✕</button>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                        <p className="lightbox-caption">{selectedImage.alt}</p>
                    </div>
                </div>
            )}

            <div className="accolades-section">
                <h2 className="section-title" style={{ fontSize: '2rem', marginTop: '60px' }}>Awards & Recognition</h2>
                <div className="accolades-grid">
                    <div className="accolade-card">
                        <span className="trophy">🏆</span>
                        <h3>Culinary Excellence Award</h3>
                        <p>2022</p>
                    </div>
                    <div className="accolade-card">
                        <span className="trophy">🏆</span>
                        <h3>Restaurant of the Year</h3>
                        <p>2023</p>
                    </div>
                    <div className="accolade-card">
                        <span className="trophy">⭐</span>
                        <h3>Best Fine Dining Experience</h3>
                        <p>Foodie Magazine, 2023</p>
                    </div>
                </div>
            </div>

            <div className="reviews-section">
                <h2 className="section-title" style={{ fontSize: '2rem', marginTop: '60px' }}>Customer Reviews</h2>
                <div className="reviews-grid">
                    <blockquote className="review-card">
                        <p>"Exceptional ambiance and unforgettable flavors. Every bite is a testament to their passion for culinary arts."</p>
                        <footer>— Gourmet Review</footer>
                    </blockquote>
                    <blockquote className="review-card">
                        <p>"A must-visit restaurant for food enthusiasts. The attention to detail and service is unparalleled."</p>
                        <footer>— The Daily Bite</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
