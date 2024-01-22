'use client';
import { motion } from 'framer-motion';
import { startingFeatures } from '../../shared/constants';
import Step from '../Step';
import Image from 'next/image';
import { TitleText, TypingText } from '../CustomText';
import { staggerContainer, fadeIn, planetVariants } from '../../shared/utils/motion';

const HowWork = () => {
  const appName=process.env.NEXT_PUBLIC_APP_NAME
  
  return <section className='relative z-10 pad'>
    <motion.div
      className='flex flex-col gap-8 innerWidth mx-auto lg:flex-row '
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        variants={planetVariants('left')}
        className='flex-1 flexCenter'
      >
        <Image
          src="/images/get-started.png"
          alt="get started"
          className="w-[90%] h-[90%] object-contain"
          height={90}
          width={90}
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title={`| How ${appName} Works`} />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="flex flex-col gap-[24px] max-w-[370px] mt-[31px] ">
          {startingFeatures.map((feat, index) => (
            <Step
              key={feat}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feat}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
};

export default HowWork;
