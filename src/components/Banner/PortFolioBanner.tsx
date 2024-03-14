import React from "react";
import PortFolioCard, { PortFolioCardProps } from "../Card/PortFolioCard";

interface PortFolioBannerProps {
  services: PortFolioCardProps[];
}

const PortFolioBanner = (props: PortFolioBannerProps) => {
  const { services } = props;
  return (
    <div className='w-full flex flex-col justify-start items-center p-8'>
      <p className='text-xl font-semibold text-gray-600 md:text-5xl'>
        Portfolio
      </p>
      <div className='flex flex-col gap-10 w-full p-6'>
        {services?.map((e, i) => (
          <PortFolioCard key={`portfolio-${i}`} {...e} fromLeft={3 % i === 0} />
        ))}
      </div>
    </div>
  );
};

export default PortFolioBanner;
