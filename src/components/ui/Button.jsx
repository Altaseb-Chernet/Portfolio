import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  animated = false,
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:from-primary-dark hover:to-secondary-dark focus:ring-primary shadow-lg hover:shadow-xl',
    secondary: 'glass text-white hover:bg-white/20 focus:ring-white border border-white/30',
    accent: 'bg-accent text-gray-900 hover:bg-amber-500 focus:ring-accent shadow-lg hover:shadow-xl',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${animated ? 'hover:-translate-y-1' : ''} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;