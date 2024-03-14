import React from "react";
import FixIcon from "../Icon/FixIcon";
import WebDev from "../Icon/WebDev";
import AllData from "../Icon/AllData";
import ServiceCard, { ServiceCardProps } from "../Card/ServiceCard";

interface ServiceBannerProps {
  services: ServiceCardProps[];
}

const ServiceBanner = (props: ServiceBannerProps) => {
  const { services } = props;
  return (
    <div className='w-full flex flex-col justify-start items-center p-8'>
      <p className='text-xl font-semibold text-gray-600 md:text-5xl'>
        Ours Services
      </p>
      <div className='flex flex-col gap-10 w-full p-6'>
        {services?.map((e, i) => (
          <ServiceCard key={`service-${i}`} {...e} fromLeft={3 % i === 0} />
        ))}
      </div>
    </div>
  );
};

export default ServiceBanner;
