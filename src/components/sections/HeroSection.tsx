"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {motion} from 'framer-motion';
import { heroVariants, slideIn, textVariant } from '@/shared/utils/motion';

const HeroSection = () => {
    const appName=process.env.NEXT_PUBLIC_APP_NAME
  return (
    <section className='pl-6 sm:pl-16 padY'>
        <motion.div
            className='flex flex-col mx-auto innerWidth'
            initial="hide"
            whileInView="show"
            variants={heroVariants(2,1.1)}
            viewport={{once:false,amount:0.25}}
        >
            <div className='relative z-10 flex flex-col justify-center items-center'>
                <motion.h1 variants={textVariant(1.1)} className='heroHeading'>
                    {appName}
                </motion.h1>
                <motion.div 
                    variants={textVariant(1.2)} 
                    className="flex flex-row justify-center items-center"
                >
                    <h1 className='heroHeading'>Ma</h1>
                    <div className='heroDText'></div>
                    <h1 className='heroHeading'>Ness</h1>
                </motion.div>
            </div>

            <motion.div
                variants={slideIn('right','tween',0.2,1)}
                className='relative md:-mt-[20px] -mt-[12px] w-full'
            >
                <div className='heroBackground absolute h-[300px] w-full rounded-l-[140px] z-[0] -top-[30px]'/>
                    <Image src='/images/cover.png' alt='hero-cover'
                    className='relative w-full sm:h-[500px] object-cover rounded-l-[140px] z-10' width={100} height={350}/>

                    <Link href="#" title='explore'>
                        <div className='relative z-10 flex justify-end -mt-[50px] sm:-mt-[70px] pr-[40px] w-full'>
                            <Image src='/images/stamp.png' alt='stamp pic'
                            className='w-[100px] sm:w-[155px] sm:h-[155px] object-contain'
                            height={155}
                            width={100}
                            />
                        </div>
                    </Link>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default HeroSection