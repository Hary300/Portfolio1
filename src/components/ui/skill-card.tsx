'use client'; // kalau kamu pakai Next.js App Router (src/app)

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image, { StaticImageData } from 'next/image';
import { Variants, motion } from 'motion/react';

type SkillCardProps = {
  skill: string;
  icon: string | StaticImageData;
  value: number;
  color: string;
  variants?: Variants;
};

const elementVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const SkillCard: React.FC<SkillCardProps> = ({ skill, icon, value, color }) => {
  return (
    <motion.div
      variants={elementVariants}
      className='flex flex-col items-center justify-center rounded-xl border border-neutral-200 bg-white p-6 shadow-md transition hover:scale-105 hover:shadow-lg'
    >
      <div className='mb-3 h-24 w-24'>
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: color,
            trailColor: '#E5E7EB',
            textColor: '#000',
            textSize: '20px',
          })}
        />
      </div>
      <div className='flex items-center gap-2'>
        <Image src={icon} alt={skill} width={20} height={20} />
        <span className='font-semibold'>{skill}</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
