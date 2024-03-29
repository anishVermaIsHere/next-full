'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/shared/utils/motion';
import Image from 'next/image';


type ExpCardPropType={
  _id:string;
  imgUrl:string;
  title:string;
  index:number;
  active:string|number;
  handleCard:(id:string|number)=>boolean
}

const ExpCard = ({ 
    _id,
    imgUrl, 
    title, 
    index, 
    active, 
    handleCard 
}:ExpCardPropType) => {
  const appName=process.env.NEXT_PUBLIC_APP_NAME

  return (
    <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === _id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleCard(_id)}
  >
    <Image
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
      height={500}
      width={500}
    />
    {active !== _id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className='flexCenterw-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]'
        >
          <Image
            src="/icons/headset.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
            height={500}
            width={500}
          />
        </div>
        <p className=" text-[16px] text-white uppercase font-normal leading-[20.16px] ">
          Enter {appName}
        </p>
        <h2 className="mt-[24px] text-[24px] text-white font-semibold sm:text-[32px] ">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
  )
}

export default ExpCard