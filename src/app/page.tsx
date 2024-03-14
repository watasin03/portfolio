import useTranslation from "next-translate/useTranslation";
import { Metadata, NextPage } from "next";
import HeroBanner from "@/components/Banner/HeroBanner";
import ServiceBanner from "@/components/Banner/ServiceBanner";
import WebDev from "@/components/Icon/WebDev";
import Image from "next/image";
import PortFolioCard from "@/components/Card/PortFolioCard";
import PortFolioBanner from "@/components/Banner/PortFolioBanner";
import Link from "next/link";

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center justify-start'>
      {/* <HeroBanner /> */}
      <div className='w-full flex flex-col justify-start items-center p-8'>
        <p className='text-xl font-semibold text-gray-600 dark:text-slate-200 md:text-5xl'>
          Portfolio
        </p>
        <div className='flex flex-col gap-10 sm:w-3/4 p-6'>
          <div className='sm:flex w-full justify-center items-center gap-6 p-2'>
            <div className='w-full flex relative justify-center items-center'>
              <div className='relative w-full flex justify-center items-center p-4'>
                <Image
                  alt=''
                  width={200}
                  height={300}
                  quality={50}
                  src={"/image/img_001.PNG"}
                  className='object-contain sm:rounded-xl rounded transition-all hover:shadow-2xl dark:shadow-slate-300 shadow-md'
                />
              </div>
            </div>
            <div className='flex justify-center items-center w-full'>
              <p className='text-[24px] indent-11 text-gray-600 font-light dark:text-gray-300'>{`โปรเจค Line Submit Form ใช้ line login และสมัคร สำหรับเก็บข้อมูลและมีระบบจัดการแสดงผลสถิติข้อมูลที่ได้รับ(Dash Board)`}</p>
            </div>
          </div>

          <div className='sm:flex w-full hidden justify-center items-center gap-6 p-2'>
            <div className='flex justify-center items-center w-full'>
              <p className='text-[24px] indent-11 text-gray-600 font-light dark:text-gray-300'>{`โปรเจคจัดการ Line OA และ 1 on 1 Chat พร้อมระบบจัดการ Admin ใช้งานในการรับส่งข้อความผ่าน Line Official Account, Broadcast ข้อความต่างๆ`}</p>
            </div>
            <div className='w-full flex justify-center items-center'>
              <div className='relative w-full p-4 max-h-[500px]'>
                <Image
                  alt=''
                  width={600}
                  height={500}
                  quality={50}
                  src={"/image/img_002.PNG"}
                  className='object-contain sm:rounded-xl rounded transition-all hover:shadow-2xl dark:shadow-slate-300 shadow-md'
                />
              </div>
            </div>
          </div>

          <div className='sm:hidden w-full justify-center items-center gap-6 p-2'>
            <div className='w-full flex justify-center items-center'>
              <div className='relative w-full p-4 max-h-[500px]'>
                <Image
                  alt=''
                  width={600}
                  height={500}
                  quality={50}
                  src={"/image/img_002.PNG"}
                  className='object-contain sm:rounded-xl rounded transition-all hover:shadow-2xl dark:shadow-slate-300 shadow-md'
                />
              </div>
            </div>
            <div className='flex justify-center items-center w-full'>
              <p className='text-[24px] indent-11 text-gray-600 font-light dark:text-gray-300'>{`โปรเจคจัดการ Line OA และ 1 on 1 Chat พร้อมระบบจัดการ Admin ใช้งานในการรับส่งข้อความผ่าน Line Official Account, Broadcast ข้อความต่างๆ`}</p>
            </div>
          </div>

          <div className='sm:flex w-full justify-center items-center gap-6 p-2'>
            <div className='w-full flex relative justify-center items-center'>
              <div className='relative w-full flex justify-center items-center p-4'>
                <Image
                  alt=''
                  width={200}
                  height={300}
                  quality={50}
                  src={"/image/img_003.PNG"}
                  className='object-contain sm:rounded-xl rounded transition-all hover:shadow-2xl dark:shadow-slate-300 shadow-md'
                />
              </div>
            </div>
            <div className='flex justify-center items-center w-full'>
              <p className='text-[24px] indent-11 text-gray-600 font-light dark:text-gray-300'>{`โปรเจคไลน์ rich menu พร้อมกับ chatbot ตอบกลับข้อความแบบ flex message และ card message สามารถกดที่เมนูจากริชเมนูต่างๆแชะแสดงข้อความในรูปแบบทีากำหนดใว้(ข้อความ,flex message, image)`}</p>
            </div>
          </div>

          <div className='sm:flex w-full hidden justify-center items-center gap-6 p-2'>
            <div className='flex justify-center items-center w-full'>
              <p className='text-[24px] indent-11 text-gray-600 font-light dark:text-gray-300'>{`โปรเจคระบบบริหารจัดการ influencer ใช้ liff app, line login ในการเข้าใช้งานและสมัครเข้าใช้งาน รวมถึงระบบการจัดการแอดมิน`}</p>
            </div>
            <div className='w-full flex justify-center items-center'>
              <div className='relative w-full flex justify-center items-center p-4'>
                <Image
                  alt=''
                  width={200}
                  height={300}
                  quality={50}
                  src={"/image/img_004.PNG"}
                  className='object-contain sm:rounded-xl rounded transition-all hover:shadow-2xl dark:shadow-slate-300 shadow-md'
                />
              </div>
            </div>
          </div>

          <div className='sm:hidden w-full justify-center items-center gap-6 p-2'>
            <div className='w-full flex justify-center items-center'>
              <div className='relative w-full flex justify-center items-center p-4'>
                <Image
                  alt=''
                  width={200}
                  height={300}
                  quality={50}
                  src={"/image/img_004.PNG"}
                  className='object-contain sm:rounded-xl rounded transition-all hover:shadow-2xl dark:shadow-slate-300 shadow-md'
                />
              </div>
            </div>
            <div className='flex justify-center items-center w-full'>
              <p className='text-[24px] indent-11 text-gray-600 font-light dark:text-gray-300'>{`โปรเจคระบบบริหารจัดการ influencer ใช้ liff app, line login ในการเข้าใช้งานและสมัครเข้าใช้งาน รวมถึงระบบการจัดการแอดมิน`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export const metadata: Metadata = {
  title: "Prompt Route hubs",
  description: "Protfolio of Prompt Route hubs",
};
