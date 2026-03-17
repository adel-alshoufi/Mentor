import heroBg from '../assets/imgi_1_hero-bg.jpg';
import './Hero.css';

export default function Hero() {
    return (
        <section
            id="hero"
            className="hero"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="hero-overlay" />
            <div className="container hero-content">
                <h1>Learning Today,<br />Leading Tomorrow</h1>
                <p>We are team of talented designers making websites with Bootstrap</p>
                <div className="hero-buttons">
                    <a href="#about" className="btn-hero-primary">Get Started</a>
                    <a href="#courses" className="btn-hero-secondary">Our Courses</a>
                </div>
            </div>
        </section>
    );
}
