import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className='w-full bg-gray-100 dark:bg-gray-800 p-2 backdrop-blur-md'>
      <div className='w-full h-full bg-gray-100 dark:bg-gray-800 rounded-md p-6 flex flex-col justify-start items-end'>
        <p className='text-2xl font-black text-slate-700 dark:text-slate-400'>
          Wuttichai Sripanna
        </p>
        <p className='text-sm font-thin text-slate-600 dark:text-slate-200'>
          Front-End Developer
        </p>
        <Link
          href={"https://fastwork.co/user/wuttichais"}
          className='text-2xl text-blue-500 dark:text-blue-400 hover:text-blue-700 cursor-pointer font-bold'
        >
          Fastwork Profile
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
