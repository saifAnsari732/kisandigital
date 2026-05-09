import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Loading from './components/Loading';
import WhatsAppButton from './components/UI/WhatsAppButton';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  // Smooth scrolling for anchor links after route change
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        setTimeout(() => {
          window.scrollTo({
            top: elem.offsetTop - 80,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white transition-colors duration-300 bg-bg-color text-text-color">
      <Loading />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as needed, e.g., /services, /portfolio */}

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetail />} />

        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;



