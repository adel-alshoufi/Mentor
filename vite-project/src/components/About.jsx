import aboutImg from '../assets/imgi_2_about.jpg';
import './About.css';

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container about-grid">
                <div className="about-content">
                    <h2>Voluptatem dignissimos provident quasi corporis</h2>
                    <p className="about-intro">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <ul className="about-list">
                        <li>
                            <i className="fa fa-check-circle" />
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </li>
                        <li>
                            <i className="fa fa-check-circle" />
                            Duis aute irure dolor in reprehenderit in voluptate velit.
                        </li>
                        <li>
                            <i className="fa fa-check-circle" />
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                        </li>
                    </ul>
                    <a href="#" className="btn-primary">Read More <i className="fa fa-arrow-right" /></a>
                </div>
                <div className="about-img">
                    <img src={aboutImg} alt="About Mentor" />
                </div>
            </div>
        </section>
    );
}
