import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Dropdown = ({ 
  options = ["Option 1", "Option 2", "Option 3"],
  placeholder = "Select an option",
  className = "",
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-transparent border-0 border-b-2 border-border focus:border-primary outline-none px-0 py-3 text-left text-foreground transition-colors duration-200 flex items-center justify-between ${className}`}
        {...props}
      >
        <span className="text-muted-foreground">
          {placeholder}
        </span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-md z-10">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-150 first:rounded-t-md last:rounded-b-md border-b border-gray-100 last:border-b-0"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;