"use client"
import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { AnimatePresence, motion } from 'framer-motion';

interface PlineProps {
  scene: string;
  className?: string;
}


const Pline: React.FC<PlineProps> = ({ scene, className }) => {
  const useDelayedTrue = (delay: number): boolean => {
    const [isTrue, setIsTrue] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsTrue(true);
      }, delay);
  
      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }, [delay]);
  
    return isTrue;
  };
  const isTrue = useDelayedTrue(2500);
  return (<>
    {isTrue && (<AnimatePresence><motion.div initial={{ opacity: 0, y: 450 }}
    whileInView={{ opacity: 1, y: 400 }}
    transition={{ duration: 2.7, delay: 0.1 }}
    viewport={{ once: true }} className={className}>
      <Spline scene={scene} />
    </motion.div> </AnimatePresence>)}</>
  );
};

export default Pline;