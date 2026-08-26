import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Education from './components/Education';
import Credly from './components/Credly';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-gray-200 selection:bg-techblue/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Credly />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
