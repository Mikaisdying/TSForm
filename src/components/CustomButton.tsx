import React from 'react';
import { Button } from 'antd';
import type { ButtonProps } from 'antd';

interface CustomButtonProps extends Omit<ButtonProps, 'className'> {
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  className = '',
  ...restProps
}) => {
  return (
    <Button
      className={`${className} w-full text-white inline-flex justify-center bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700`}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export { CustomButton };
