import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import BackgroundSlideshow from './components/background/BackgroundSlideshow';
import './index.css';

const App = () => {
  return (
    <>
      {/* Background slideshow that changes images based on scroll */}
      <BackgroundSlideshow />

      {/* Foreground content of your portfolio */}
      <div className="content-overlay">
        <Header />
	<Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
