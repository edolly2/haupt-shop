import { useState, useEffect } from 'react';

const Copyright = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);
  return <p>&copy; {currentYear} The Haupt Shop</p>;
};

export default Copyright;
