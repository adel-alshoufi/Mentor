import './Clients.css';

const clients = [
    { icon: 'fa-regular fa-eye', label: 'Lorem Ipsum', color: '#f4a261' },
    { icon: 'fa-solid fa-infinity', label: 'Dolor Sitema', color: '#457b9d' },
    { icon: 'fa-solid fa-graduation-cap', label: 'Sed perspiciatis', color: '#e63946' },
    { icon: 'fa-regular fa-hexagon', label: 'Magni Dolores', color: '#9b5de5' },
    { icon: 'fa-solid fa-shuffle', label: 'Nemo Enim', color: '#457b9d' },
    { icon: 'fa-regular fa-star', label: 'Elusmod Tempor', color: '#f4a261' },
    { icon: 'fa-solid fa-dharmachakra', label: 'Midela Teren', color: '#2a9d8f' },
    { icon: 'fa-regular fa-square', label: 'Pira Neve', color: '#4361ee' },
    { icon: 'fa-solid fa-gg', label: 'Dirada Pack', color: '#e63946' },
    { icon: 'fa-brands fa-dribbble', label: 'Moton Ideal', color: '#e63946' },
    { icon: 'fa-solid fa-wave-square', label: 'Verdo Park', color: '#f4a261' },
    { icon: 'fa-solid fa-sun', label: 'Flavor Nivelanda', color: '#f4a261' },
];

export default function Clients() {
    return (
        <section id="clients" className="clients">
            <div className="container clients-grid">
                {clients.map((c, i) => (
                    <div className="client-item" key={i}>
                        <i className={c.icon} style={{ color: c.color }} />
                        <span>{c.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
