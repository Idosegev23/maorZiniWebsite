import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  showUnderline?: boolean;
  boldSubtitle?: boolean;
  rightAligned?: boolean;
  centerSubtitle?: boolean;
  titleClassName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  className = '',
  showUnderline = false,
  boldSubtitle = false,
  rightAligned = false,
  centerSubtitle = false,
  titleClassName = '',
}) => {
  return (
    <div className={`mb-12 ${center && !rightAligned ? 'text-center' : ''} ${rightAligned ? 'text-right' : ''} ${className}`}>
      <h2 className={`section-title relative ${rightAligned ? '' : 'inline-block'} ${titleClassName}`}>
        {title}
        {showUnderline && (
          <span className={`${rightAligned ? 'block h-0.5 w-16 bg-brandGold mr-1 mb-4' : 'absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent'}`}></span>
        )}
      </h2>
      {subtitle && (
        <p className={`text-lg text-brandGray ${boldSubtitle ? 'font-semibold' : ''} ${
          centerSubtitle ? 'text-center mx-auto' : center && !rightAligned ? 'mx-auto' : ''
        } ${rightAligned && !centerSubtitle ? 'text-right' : ''} max-w-3xl`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle; 