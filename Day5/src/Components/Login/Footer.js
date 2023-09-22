import React, { useEffect, useState } from 'react';
import "./Footer.css";
function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsVisible(isScrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`footer ${isVisible ? 'show-footer' : ''}`}>
      <p>&copy;  Donate!</p>
    </div>
  );
}

export default Footer;
