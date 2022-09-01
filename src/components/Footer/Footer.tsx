import React from 'react';
import { Button } from "./../ui/Button";

export const Footer = () => {
  return (
    <div className={"w-full grid grid-cols-2 gap-4 p-8"}>
      <Button text={"forgot password"} isPrimary={false} />
      <Button text={"log in"} isPrimary={true} />
    </div>
  );
};

export default Footer;
