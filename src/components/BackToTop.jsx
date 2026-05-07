import { useEffect, useState } from 'react';

function BackToTop() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup Function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  };

  return (

    <>
      {showButton && (

        <button
          className="top-button"
          onClick={scrollToTop}
        >
          ↑
        </button>

      )}
    </>

  );
}

export default BackToTop;