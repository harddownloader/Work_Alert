import React from 'react';

export interface ButtonProps {
  text: string
  isPrimary: boolean
}

export const Button = ({ text, isPrimary }: ButtonProps) => {
  return (
    <button className={`text-base text-main-3 rounded p-4 ${ isPrimary ? 'bg-brand' : 'bg-main-1' } uppercase`}>{ text }</button>
  );
};

export default Button;
