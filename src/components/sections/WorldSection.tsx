'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TitleText, TypingText } from '../CustomText';
import { fadeIn, staggerContainer } from '@/shared/utils/motion';

const WorldSection = () => (
  <section className='relative z-10 pad'>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='innerWidth flex flex-col mx-auto'
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <Image src="/images/map.png" alt="map" className="w-full h-full object-cover" height={100} width={100}/>

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image src="/images/people-01.png" alt="people" className="w-full h-full" height={100} width={100}/>
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image src="/images/people-02.png" alt="people" className="w-full h-full" height={100} width={100} />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image src="/images/people-03.png" alt="people" className="w-full h-full" height={100} width={100} />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default WorldSection;
