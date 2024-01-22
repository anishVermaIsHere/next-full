'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../shared/utils/motion';
import { TitleText, TypingText } from '../CustomText';
import ExpCard from '../ExpCard';
import { ISectionData } from '@/shared/types';

const ExploreSection = ({explore}:ISectionData[]) => {
  const [active, setActive] = useState<string|number>(2);

  const handleCard=(id:string|number)=>{
    setActive(id);
  }

  return (
    <section className='pad' id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='flex flex-col mx-auto innerWidth'
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={<>Choose the world you want <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {explore.map((world, index) => (
            <ExpCard
              key={world._id}
              index={index}
              active={active}
              handleCard={handleCard}
              {...world}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExploreSection;
