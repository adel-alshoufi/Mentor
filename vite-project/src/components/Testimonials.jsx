import { useState } from 'react';
import trainer1 from '../assets/imgi_9_trainer-1.jpg';
import trainer2 from '../assets/imgi_10_trainer-2.jpg';
import trainer3 from '../assets/imgi_11_trainer-3.jpg';
import './Testimonials.css';

const testimonials = [
    {
        img: trainer1,
        name: 'Walter White',
        role: 'Web Development',
        text: 'Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut',
    },
    {
        img: trainer2,
        name: 'Sarah Jhinson',
        role: 'Marketing',
        text: 'Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus',
    },
    {
        img: trainer3,
        name: 'William Anderson',
        role: 'Content',
        text: 'Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara',
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-title">
                    <h2>Testimonials</h2>
                    <p>
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>
                </div>
                <div className="testimonials-slider">
                    <div className="testimonial-item">
                        <img src={testimonials[active].img} alt={testimonials[active].name} />
                        <h3>{testimonials[active].name}</h3>
                        <h4>{testimonials[active].role}</h4>
                        <div className="stars">
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className="fa fa-star" />
                            ))}
                        </div>
                        <p>
                            <i className="fa fa-quote-left quote-icon-left" />
                            {testimonials[active].text}
                            <i className="fa fa-quote-right quote-icon-right" />
                        </p>
                    </div>
                    <div className="testimonial-dots">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                className={`dot ${i === active ? 'active' : ''}`}
                                onClick={() => setActive(i)}
                                aria-label={`Testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
