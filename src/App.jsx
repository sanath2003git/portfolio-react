import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    if (!reveals.length) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');

            // Animate only once
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    reveals.forEach((element) => {
      revealObserver.observe(element);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />

      <BackToTop />
    </>
  );
}

export default App;