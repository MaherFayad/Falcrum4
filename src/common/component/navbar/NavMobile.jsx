"use client";
import clsx from "clsx";
import NavigationMenuMobile from "./NavigationMenuMobile";
import { useEffect, useState } from "react";

const NavMobile = ({ open, handleOpen, close }) => {

  return (
    <div>
      <label className={`hamburger relative z-[999] ${open ? "open" : ""}`}>
        <input
          type="checkbox"
          className="inputToogle"
          checked={open}
          onChange={handleOpen}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="80"
          viewBox="0 0 120 60"
          fill="none"
        >
          <line y1="0" x2="120" y2="0" className={clsx(open ? 'stroke-white rotate-[45deg] translate-x-[24px] -translate-y-[20px]' : 'delay-700 stroke-black dark:stroke-white', `transition-all duration-50 `)} strokeWidth="3" />
          <line y1="35" x2="120" y2="35" className={clsx(open ? 'opacity-0' : 'delay-700 stroke-black dark:stroke-white', `transition-all duration-50 `)} strokeWidth="3" />
          <line y1="70" x2="120" y2="70" className={clsx(open ? 'stroke-white -rotate-[45deg] -translate-x-6 translate-y-[12px]' : 'delay-700 stroke-black dark:stroke-white', `transition-all duration-50 `)} strokeWidth="3" />
        </svg>
      </label>
      <NavigationMenuMobile open={open} close={close} />
    </div>
  );
};

export default NavMobile;
