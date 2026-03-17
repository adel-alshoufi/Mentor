import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-about">
                    <h3>Mentor<span>.</span></h3>
                    <p>
                        A108 Adam Street, New York, NY 535022
                    </p>
                    <p>
                        <strong>Phone:</strong> +1 5589 55488 55
                    </p>
                    <p>
                        <strong>Email:</strong> info@example.com
                    </p>
                    <div className="footer-social">
                        <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href="#hero"><i className="fa fa-chevron-right" /> Home</a></li>
                        <li><a href="#about"><i className="fa fa-chevron-right" /> About us</a></li>
                        <li><a href="#courses"><i className="fa fa-chevron-right" /> Courses</a></li>
                        <li><a href="#"><i className="fa fa-chevron-right" /> Terms of service</a></li>
                        <li><a href="#"><i className="fa fa-chevron-right" /> Privacy policy</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Our Courses</h4>
                    <ul>
                        <li><a href="#"><i className="fa fa-chevron-right" /> Web Design</a></li>
                        <li><a href="#"><i className="fa fa-chevron-right" /> Web Development</a></li>
                        <li><a href="#"><i className="fa fa-chevron-right" /> Product Management</a></li>
                        <li><a href="#"><i className="fa fa-chevron-right" /> Marketing</a></li>
                        <li><a href="#"><i className="fa fa-chevron-right" /> Graphic Design</a></li>
                    </ul>
                </div>

                <div className="footer-newsletter">
                    <h4>Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>
                        &copy; Copyright <strong>Mentor</strong>. All Rights Reserved
                    </p>
                    <p>
                        Designed by <a href="https://themewagon.com" target="_blank" rel="noreferrer">ThemeWagon</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
