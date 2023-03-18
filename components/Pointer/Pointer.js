import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    width: 0,
    height: 0,
    transition: { delay: 4 }
  },
  default: ({ position }) => ({
    width: 32,
    height: 32,
    x: position.x - 16,
    y: position.y - 14
  }),
  over: ({ position, overHeight }) => ({
    height: overHeight,
    width: overHeight,
    x: position.x - overHeight / 2,
    y: position.y - overHeight / 2
  })
};

const Pointer = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [overHeight, setOverHeight] = useState(null);

  const updatePosition = useCallback((event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  }, []);

  const updateOver = useCallback((event) => {
    const { target } = event;
    if (target.dataset?.cursor === 'over') setOverHeight(target.offsetHeight * 3);
    else setOverHeight(null);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, [updatePosition]);

  useEffect(() => {
    window.addEventListener('mouseover', updateOver);

    return () => {
      window.removeEventListener('mouseover', updateOver);
    };
  }, [updateOver]);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      custom={{ position, overHeight }}
      animate={overHeight ? 'over' : 'default'}
      className="h-8 w-8 rounded-full fixed bg-white pointer-events-none mix-blend-difference z-[1000]"
    />
  );
};

export default Pointer;
