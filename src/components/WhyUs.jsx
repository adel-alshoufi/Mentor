import './WhyUs.css';

const features = [
    {
        icon: 'fa-solid fa-diagram-project',
        title: 'Corporis voluptates officia eiusmod',
        desc: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
    },
    {
        icon: 'fa-solid fa-chart-bar',
        title: 'Ullamco laboris ladore pan',
        desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
    },
    {
        icon: 'fa-solid fa-lightbulb',
        title: 'Labore consequatur incidid dolore',
        desc: 'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere',
    },
];

export default function WhyUs() {
    return (
        <section id="why-us" className="why-us">
            <div className="container">
                <div className="why-us-grid">
                    <div className="why-us-left">
                        <div className="section-title" style={{ textAlign: 'left' }}>
                            <h2 style={{ textAlign: 'left' }}>Why Choose Our Products?</h2>
                        </div>
                        <p className="why-us-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                        </p>
                        <p className="why-us-desc">
                            Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                        </p>
                    </div>
                    <div className="why-us-right">
                        {features.map((f, i) => (
                            <div className="why-us-item" key={i}>
                                <div className="why-us-icon">
                                    <i className={f.icon} />
                                </div>
                                <div>
                                    <h4>{f.title}</h4>
                                    <p>{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
