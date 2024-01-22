'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/shared/utils/motion';
import Image from 'next/image';

type CardPropType ={
  imgUrl:string;
  title:string;
  content:string;
  index:string;
}
const InsightCard = ({ imgUrl, title, content, index }:CardPropType) => (
  <motion.div
    variants={fadeIn('up', 'spring', 0.5 *index, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <Image
      src={imgUrl}
      alt={title}
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      height={250}
      width={270}
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {content}
        </p>
      </div>

      <div
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
      >
        <Image
          src="/icons/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
          height={40}
          width={40}
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
