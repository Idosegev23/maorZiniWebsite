import React from 'react';

interface InputFieldProps {
  id: string;
  name?: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
  isTextArea?: boolean;
  rows?: number;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
  isTextArea = false,
  rows = 4,
  error,
}) => {
  const baseClasses = `w-full border border-gray-300 rounded-lg p-3 text-brandGray focus:outline-none focus:ring-2 focus:ring-brandGold focus:border-transparent ${className}`;
  
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-2 font-medium text-brandGray">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {isTextArea ? (
        <textarea
          id={id}
          name={name || id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={baseClasses}
          rows={rows}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name || id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={baseClasses}
        />
      )}
      
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputField; 