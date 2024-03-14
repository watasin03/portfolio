import React from "react";
import Image from "next/image";

export interface PortFolioCardProps {
  image: string;
  fromLeft?: boolean;
  caption: string;
}

const PortFolioCard = (props: PortFolioCardProps) => {
  const { image, fromLeft, caption } = props;
  return (
    <div className='w-full p-2'>
      {fromLeft ? (
        <div className='sm:flex w-full justify-center items-center gap-6 p-2'>
          <div className='w-full flex relative justify-center items-center'>
            <div className='relative w-full p-4 max-h-[500px]'>
              <Image
                alt=''
                width={400}
                height={500}
                quality={20}
                src={image}
                className='object-cover'
              />
            </div>
          </div>
          <div className='flex justify-center items-center w-full'>
            <p>{caption}</p>
          </div>
        </div>
      ) : (
        <>
          <div className='sm:flex w-full hidden justify-center items-center gap-6 p-2'>
            <div className='flex justify-center items-center w-full'>
              <p>{caption}</p>
            </div>
            <div className='w-full flex justify-center items-center'>
              <div className='relative w-full p-4 max-h-[500px]'>
                <Image
                  alt=''
                  width={400}
                  height={500}
                  quality={20}
                  src={image}
                  className='object-cover'
                />
              </div>
            </div>
          </div>

          <div className='sm:hidden w-full justify-center items-center gap-6 p-2'>
            <div className='w-full flex justify-center items-center'>
              <div className='relative w-full p-4 max-h-[500px]'>
                <Image
                  alt=''
                  width={400}
                  height={500}
                  quality={20}
                  src={image}
                  className='object-cover'
                />
              </div>
            </div>
            <div className='flex justify-center items-center w-full'>
              <p>{caption}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PortFolioCard;
