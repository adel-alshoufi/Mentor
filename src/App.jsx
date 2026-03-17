import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Courses from './components/Courses';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Clients />
      <Courses />
      <Trainers />
      <Testimonials />
      <Footer />
    </>
  );
}
