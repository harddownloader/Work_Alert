import React from 'react';

export const Header = () => {
  return (
    <div className={"w-full bg-main-1 p-8 flex items-center justify-between"}>
      <div className={"head"}>
        <span className={"text-xl text-brand capitalize"}>work</span>
        <span className={"text-xl text-white capitalize"}>Alert</span>
      </div>
      <div className="action-btn">
        <button className={"text-lg text-brand border-[1.5px] border-brand rounded px-4 py-2 uppercase"}>sign up</button>
      </div>
    </div>
  );
};

export default Header;
