import React, { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const AnimatedElement = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  className = '',
  threshold = 0.1 
}) => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold });
  
  const animationClasses = {
    fadeInUp: 'animate-fade-in-up',
    slideInLeft: 'animate-slide-in-left',
    slideInRight: 'animate-slide-in-right',
    float: 'animate-float'
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? `${animationClasses[animation]} opacity-100` : 'opacity-0'
      } ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;