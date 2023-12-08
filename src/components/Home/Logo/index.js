import React, { useEffect, useRef } from 'react';
import LogoS from '../../../assets/images/daniel.png';
import './index.scss';

const Logo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const logoElement = logoRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const logoPosition = logoElement.offsetTop;

      // Adjust the value (e.g., 200) based on when you want the fade-in to occur
      if (scrollPosition > logoPosition - 200) {
        logoElement.classList.add('fade-in');
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="logo-container">
      <img
        ref={logoRef}
        src={LogoS}
        alt="Logo"
        className={`logo fade-in`}
      />
    </div>
  );
};

export default Logo;
