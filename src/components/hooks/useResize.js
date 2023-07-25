import { useState, useEffect } from 'react';
import {
  SCREEN_S, SCREEN_M, SCREEN_L,
} from '../../utils/constants';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenS: width <= SCREEN_S,
    isScreenM: width <= SCREEN_M,
    isScreenL: width > SCREEN_M,
  };
};