
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollTop() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Hər keçid zamanı səhifəni başa qaytarır
    }, [location]);
  
    return null;
  };

export default ScrollTop