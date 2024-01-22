'use client';
import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../CustomText';
import {staggerContainer } from '../../shared/utils/motion';
import InsightCard from '../InsightCard';
import { ISectionData } from '@/shared/types';

const Insights = ({insights}:ISectionData[]) => {
  const appName=process.env.NEXT_PUBLIC_APP_NAME
  
  return <section className='relative z-10 pad'>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='flex flex-col innerWidth mx-auto'
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>Insight about {appName}</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insgt-${item._id}`} index={index + 1} {...item} />
        ))}
      </div>
    </motion.div>
  </section>
};

export default Insights;
