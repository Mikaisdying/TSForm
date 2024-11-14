import React from 'react';
import { Input } from 'antd';
import type { InputProps } from 'antd';

interface CustomInputProps extends Omit<InputProps, 'type'> {
  label?: string;
  required?: boolean;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChange,
  required,
  type = 'text',
  ...restProps
}) => {
  return (
    <div className="mb-1">
      {label && (
        <label className="block mb-1">
          {label}
          {required && <span className="text-red-500">*</span>}{' '}
        </label>
      )}
      <Input
        type={type}
        className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        value={value}
        onChange={onChange}
        required={required}
        {...restProps}
      />
    </div>
  );
};

export { CustomInput };
