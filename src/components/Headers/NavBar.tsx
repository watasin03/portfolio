"use client";

import React, { useState } from "react";
import Light from "../Icon/Light";
import Dark from "../Icon/Dark";
import Hamberger from "../Icon/Hamberger";

const NavBar = () => {
  const [mode, setMode] = useState("");
  return (
    <header className='w-full p-2 h-20 fixed backdrop-blur-md z-30 bg-[rgba(182,182,182,0.1)] shadow-sm dark:shadow-[rgba(255,255,255,0.1)]'>
      <nav className='flex w-full p-4 justify-between'>
        <p className='text-gray-800 font-semibold dark:text-gray-300'>
          Prompt Route hubs
        </p>
        <ul className='sm:flex hidden justify-start items-center text-black gap-4'>
          <li className='text-gray-700 dark:text-gray-400'>Services</li>
          <li className='text-gray-700 dark:text-gray-400'>Project</li>
          <li className='text-gray-700 dark:text-gray-400'>Contact Us</li>
          <li>
            <button
              onClick={() => {
                const element = document?.getElementsByTagName("html")[0];
                if (mode === "dark") {
                  setMode("");
                  element.setAttribute("class", "");
                } else {
                  setMode("dark");
                  element.setAttribute("class", "dark");
                }
              }}
            >
              {mode === "dark" ? (
                <Light color='#fac532' />
              ) : (
                <Dark color='#070c57' />
              )}
            </button>
          </li>
        </ul>
        <div className='block sm:hidden'>
          <button>
            <Hamberger />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
