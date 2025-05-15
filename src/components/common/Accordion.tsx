"use client";

import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItemProps[];
  className?: string;
}

const AccordionItem: React.FC<AccordionItemProps & { isOpen: boolean; toggle: () => void }> = ({
  title,
  content,
  isOpen,
  toggle,
}) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-right focus:outline-none"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-brandBlue">{title}</span>
        <span className="text-brandBlue">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </span>
      </button>
      <div
        className={`mt-2 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="py-2 text-brandGray">{content}</p>
      </div>
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`w-full ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion; 