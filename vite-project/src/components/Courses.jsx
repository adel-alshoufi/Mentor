import course1 from '../assets/imgi_3_course-1.jpg';
import trainer1 from '../assets/imgi_4_trainer-1-2.jpg';
import course2 from '../assets/imgi_5_course-2.jpg';
import trainer2 from '../assets/imgi_6_trainer-2-2.jpg';
import course3 from '../assets/imgi_7_course-3.jpg';
import trainer3 from '../assets/imgi_8_trainer-3-2.jpg';
import './Courses.css';

const courses = [
    {
        img: course1,
        trainer: trainer1,
        category: 'Web Development',
        title: 'Website Design',
        desc: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
        students: 50,
        duration: '1:30 hrs',
        price: '$169',
        trainerName: 'Antonio',
    },
    {
        img: course2,
        trainer: trainer2,
        category: 'Marketing',
        title: 'Search Engine Optimization',
        desc: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
        students: 35,
        duration: '1:20 hrs',
        price: '$250',
        trainerName: 'Lana',
    },
    {
        img: course3,
        trainer: trainer3,
        category: 'Content',
        title: 'Copywriting',
        desc: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
        students: 20,
        duration: '1:10 hrs',
        price: '$180',
        trainerName: 'Brandon',
    },
];

export default function Courses() {
    return (
        <section id="courses" className="courses">
            <div className="container">
                <div className="section-title">
                    <h2>Courses</h2>
                    <p>
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>
                </div>
                <div className="courses-grid">
                    {courses.map((c, i) => (
                        <div className="course-card" key={i}>
                            <div className="course-img">
                                <img src={c.img} alt={c.title} />
                                <div className="course-category">{c.category}</div>
                            </div>
                            <div className="course-body">
                                <div className="course-trainer">
                                    <img src={c.trainer} alt={c.trainerName} />
                                    <span>{c.trainerName}</span>
                                </div>
                                <h3>{c.title}</h3>
                                <p>{c.desc}</p>
                                <div className="course-meta">
                                    <span><i className="fa fa-users" /> {c.students} Students</span>
                                    <span><i className="fa fa-clock" /> {c.duration}</span>
                                    <span className="course-price">{c.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
