'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { textVariant2,textContainer } from '../shared/utils/motion';


type TextPropType ={
  title:JSX.Element | string;
  textStyles?:string;
}


export const TitleText:FC<TextPropType>= ({ title, textStyles }:TextPropType) => (
  <motion.h2
    className={`text-[40px] text-white font-bold md:text-[64px] mt-[8px] ${textStyles}`}
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
  >
    {title}
  </motion.h2>
);

export const TypingText:FC<TextPropType>= ({ title, textStyles }:TextPropType) => (
    <motion.p
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
      variants={textContainer}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
  );
  