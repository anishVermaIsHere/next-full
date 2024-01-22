'use client';
import { motion } from 'framer-motion';
import NewFeature from '../feature/NewFeature';
import Image from 'next/image';
import { TitleText, TypingText } from '../CustomText';
import { planetVariants, staggerContainer, fadeIn } from '../../shared/utils/motion';
import { ISectionData } from '@/shared/types';


const WhatsNew = ({newFeatures}:ISectionData[]) => {
  const appName=process.env.NEXT_PUBLIC_APP_NAME

  return <section className='relative z-10 pad'>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='flex flex-col gap-8 mx-auto lg:flex-row innerWidth'
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<>What's new about {appName}?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeature key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className='flex-1 flexCenter'
      >
        <Image
          src="/images/whats-new.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
          height={90}
          width={90}
        />
      </motion.div>
    </motion.div>
  </section>
};

export default WhatsNew;
