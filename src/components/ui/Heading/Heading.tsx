import React from 'react';

export interface HeadingProps {
  text: string
}

export const Heading = ({ text }: HeadingProps) => {
  return (
    <h1 className={"text-white font-medium text-xl uppercase"}>{ text }</h1>
  );
};

export default Heading;
