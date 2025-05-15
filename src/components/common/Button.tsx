import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  href,
  onClick,
  type = 'button',
  fullWidth = false,
  ariaLabel,
}) => {
  const baseClasses = `btn btn-${variant} ${fullWidth ? 'w-full' : ''} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={baseClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button; 