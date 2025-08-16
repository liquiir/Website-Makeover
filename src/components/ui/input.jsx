import React from 'react';

const Input = ({ 
  type = "text", 
  placeholder, 
  className = "",
  ...props 
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full bg-transparent border-0 border-b-2 border-border focus:border-primary outline-none px-0 py-3 text-foreground placeholder:text-muted-foreground transition-colors duration-200 ${className}`}
      {...props}
    />
  );
};

export default Input;