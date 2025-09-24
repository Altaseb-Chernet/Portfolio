import React from 'react';

const Card = ({ children, className = '', hoverable = true, ...props }) => {
  return (
    <div 
      className={`glass rounded-xl p-6 transition-all duration-300 ${
        hoverable ? 'hover:scale-105 hover:shadow-2xl' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;