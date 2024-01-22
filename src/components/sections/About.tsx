"use client";
import React from 'react';
import {motion} from 'framer-motion';
import { TypingText } from '../CustomText';
import { fadeIn } from '@/shared/utils/motion';


const About = () => {
  const appName=process.env.NEXT_PUBLIC_APP_NAME
  return (
    <section className='relative pad z-10'>
        <div className='aboutBackground z-0'></div>

        <motion.div
        className='innerWidth flexCenter flex-col mx-auto'
        initial='hidden'
        whileInView='show'
        viewport={{once: true,amount:0.25}}
        >
            <TypingText title={`| About ${appName}`} textStyles="text-center" />
        
            <motion.p
            className="text-[20px] text-center text-secondary-white font-normal sm:text-[32px] mt-[8px]"
            variants={fadeIn('up','tween',0.5,1)}
            >
                <span className='font-bold text-white'>{appName} </span>
                is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this {appName} world, because this is really the <span className='font-bold text-white'> 
                 madness of the {appName}
                </span> of today, using only VR devices you can easily explore the {appName} world you want, turn your dreams into reality. Let's explore the madness of the {appName} by scrolling down
            </motion.p>

            <motion.img
            src='/icons/arrow-down.svg'
            alt='scroll down arrow'
            className='h-[28px] w-[18px] object-contain mt-[28px]'
            >
            </motion.img>
        
        </motion.div>
    </section>
  )
}

export default About