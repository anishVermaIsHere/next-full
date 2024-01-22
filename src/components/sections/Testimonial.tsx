'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn,staggerContainer,zoomIn } from '@/shared/utils/motion';

const Testimonial = () => {
  const appName=process.env.NEXT_PUBLIC_APP_NAME
  return <section className='pad'>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='innerWidth mx-auto flex lg:flex-row flex-col gap-6'
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            David
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Founder {appName}
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “With the development of today's technology, {appName} is very
          useful for today's work, or can be called web 3.0. by using
          {appName} you can use it as anything”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/images/planet-04.png"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
          width={100}
          height={610}
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
            src="/images/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
            height={155}
            width={155}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
};

export default Testimonial;
