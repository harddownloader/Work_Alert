import React from 'react';


export interface InputProps {
  placeholder: string
}

export const Input = ({ placeholder }: InputProps) => {
  return (
    <input
      type="text"
      className={"w-full bg-transparent text-base text-main-3 rounded border border-main-2 p-4"}
      placeholder={placeholder}
    />
  );
};

export default Input;
