import React, { useEffect, useState } from 'react';
import './background.css';
import Fuji from '../../assets/mount-fuji.webp';
import Pyramids from '../../assets/pyramids.png';
import Eiffel from '../../assets/eiffel.png';

const BackgroundSlideshow = () => {
  const [background, setBackground] = useState(Fuji);

  useEffect(() => {
    const images = [Fuji, Pyramids, Eiffel];

    // Preload images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.loading = 'eager';
    });

    let lastBackground = Fuji;
    let timeout;

    const handleScroll = () => {
      const scroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scroll / height;

      let newBackground;
      if (scrollPercent < 0.15) {
        newBackground = Fuji;
      } else if (scrollPercent < 0.50) {
        newBackground = Pyramids;
      } else {
        newBackground = Eiffel;
      }

      // Only update if image changed
      if (newBackground !== lastBackground) {
        lastBackground = newBackground;
        setBackground(newBackground);
      }
    };

    const debouncedScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleScroll, 50); // wait 50ms after last scroll
    };

    window.addEventListener('scroll', debouncedScroll);
    handleScroll(); // Run on mount

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, []);

  return (
    <div
      className="background-slideshow"
      style={{ backgroundImage: `url(${background})` }}
    ></div>
  );
};

export default BackgroundSlideshow;
