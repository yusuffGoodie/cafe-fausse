import './AboutUs.css';

function AboutUs() {
    return (
        <div className="about-page fade-in section container">
            <h1 className="section-title">Our Story</h1>

            <div className="about-content">
                <div className="about-text">
                    <p className="lead">
                        Founded in 2010 by Chef Antonio Rossi and restaurateur Maria Lopez, Café Fausse blends traditional Italian flavors with modern culinary innovation.
                    </p>
                    <p>
                        Our mission is to provide an unforgettable dining experience that reflects both quality and creativity. We believe in using the finest, locally sourced ingredients to craft dishes that not only taste incredible but look stunning.
                    </p>
                    <p>
                        At Café Fausse, we do not just serve food; we create memories. From our curated wine list to our passionate staff, every detail is considered to bring you the best fine dining experience.
                    </p>
                </div>
                <div className="about-image">
                    <img src="/images/about_us_founders_1776511849067.png" alt="Chef Antonio Rossi and Maria Lopez" />
                </div>
            </div>

            <div className="founders-bios">
                <div className="bio-card">
                    <h3>Chef Antonio Rossi</h3>
                    <p>With over two decades of experience in the heart of Rome, Chef Antonio brings authentic Italian culinary techniques mixed with a modern flair. His passion for bold, fresh flavors is the driving force behind the Café Fausse menu.</p>
                </div>
                <div className="bio-card">
                    <h3>Maria Lopez</h3>
                    <p>Maria's impeccable taste in design and hospitality transforms a simple meal into an immersive experience. Her visionary approach to the restaurant's ambiance and service ensures that every guest feels like family.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
