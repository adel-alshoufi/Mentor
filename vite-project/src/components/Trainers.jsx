import trainer1 from '../assets/imgi_9_trainer-1.jpg';
import trainer2 from '../assets/imgi_10_trainer-2.jpg';
import trainer3 from '../assets/imgi_11_trainer-3.jpg';
import './Trainers.css';

const trainers = [
    {
        img: trainer1,
        name: 'Walter White',
        role: 'Web Development',
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#',
    },
    {
        img: trainer2,
        name: 'Sarah Jhinson',
        role: 'Marketing',
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#',
    },
    {
        img: trainer3,
        name: 'William Anderson',
        role: 'Content',
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#',
    },
];

export default function Trainers() {
    return (
        <section id="trainers" className="trainers">
            <div className="container">
                <div className="section-title">
                    <h2>Trainers</h2>
                    <p>
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>
                </div>
                <div className="trainers-grid">
                    {trainers.map((t, i) => (
                        <div className="trainer-card" key={i}>
                            <div className="trainer-img">
                                <img src={t.img} alt={t.name} />
                                <div className="trainer-social">
                                    <a href={t.twitter} aria-label="Twitter"><i className="fab fa-twitter" /></a>
                                    <a href={t.facebook} aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                                    <a href={t.instagram} aria-label="Instagram"><i className="fab fa-instagram" /></a>
                                    <a href={t.linkedin} aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                            <div className="trainer-info">
                                <h4>{t.name}</h4>
                                <span>{t.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
