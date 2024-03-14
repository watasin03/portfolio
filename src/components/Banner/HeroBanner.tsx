import React from "react";
import Image from "next/image";
import BuildWeb from "../Icon/BuildWeb";

const HeroBanner = () => {
  return (
    <div className='flex md:flex-row relative flex-col justify-start md:items-center p-6 items-center bg-gradient-to-b md:h-full h-screen w-full from-orange-100 via-yellow-50 to-green-100'>
      <div className='w-full max-w-[80%] md:max-w-[55%]'>
        <BuildWeb />
      </div>
      <div className='w-full flex justify-center items-center md:px-20'>
        <p className='md:text-4xl xl:text-[56px] xl:leading-[60px]'>
          "Experience innovation at its finest with Prompt Route hub.
          Transforming ideas into reality, one breakthrough at a time."
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
