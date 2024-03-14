import React from "react";

export interface ServiceCardProps {
  icon: JSX.Element;
  fromLeft?: boolean;
  caption: string;
}

const ServiceCard = (props: ServiceCardProps) => {
  const { icon, fromLeft, caption } = props;
  return (
    <div className='w-full grid grid-cols-2 justify-center items-center gap-6'>
      {fromLeft ? (
        <>
          <div className='w-full flex justify-center items-center'>
            <div className='w-[50%]'>{icon}</div>
          </div>
          <div className='flex justify-center items-center w-full'>
            <p>{caption}</p>
          </div>
        </>
      ) : (
        <>
          <div className='flex justify-center items-center w-full'>
            <p>{caption}</p>
          </div>
          <div className='w-full flex justify-center items-center'>
            {" "}
            <div className='w-[50%]'>{icon}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceCard;
