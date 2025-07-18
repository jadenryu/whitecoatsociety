import React, { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variantClasses = {
      default: "bg-blue-600 text-white hover:bg-blue-700 border-0",
      outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100",
      ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
    };
    
    const sizeClasses = {
      default: "h-10 py-2 px-4 text-sm",
      sm: "h-8 px-3 text-xs",
      lg: "h-12 px-6 text-base",
    };
    
    // Handle custom classes that might override colors
    const customClasses = className.split(' ');
    const hasCustomBg = customClasses.some(cls => cls.includes('bg-'));
    const hasCustomText = customClasses.some(cls => cls.includes('text-'));
    
    // If custom colors are provided, use them; otherwise use variant defaults
    let finalClasses = `${baseClasses} ${sizeClasses[size]}`;
    
    if (hasCustomBg && hasCustomText) {
      // Custom colors provided, just add base classes
      finalClasses = `${finalClasses} ${className}`;
    } else {
      // Use variant defaults and append remaining custom classes
      finalClasses = `${finalClasses} ${variantClasses[variant]} ${className}`;
    }
    
    return (
      <button className={finalClasses} ref={ref} {...props} />
    );
  }
);

Button.displayName = "Button";

export { Button }; 