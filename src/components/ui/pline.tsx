"use client"
import React from 'react';
import Spline from '@splinetool/react-spline';

interface PlineProps {
  scene: string;
  className?: string;
}

const Pline: React.FC<PlineProps> = ({ scene, className }) => {
  return (
    <div className={className}>
      <Spline scene={scene} />
    </div>
  );
};

export default Pline;