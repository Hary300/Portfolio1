import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, Variants } from 'motion/react';

type ExpCardProps = {
  title: string;
  icon: string | StaticImageData;
  bgColor?: string;
  textWeight?: string;
  bgIcon?: string;
  bulletPoints?: string[];
  bulletIcon?: string | StaticImageData;
};

const elementVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ExpCard: React.FC<ExpCardProps> = ({
  title,
  icon,
  bgColor,
  textWeight,
  bgIcon,
  bulletPoints = [],

  bulletIcon = '/images/bulleticon.svg', // default bullet
}) => {
  return (
    <motion.div
      variants={elementVariants}
      className={`flex w-full transform flex-col items-center justify-center gap-4 rounded-xl border border-neutral-200 p-6 shadow-md transition hover:scale-105 hover:shadow-lg ${
        bgColor || 'bg-white'
      } ${textWeight || 'font-medium'}`}
    >
      <div className='flex flex-col items-center gap-6'>
        <h1 className='text-2xl font-semibold'>{title}</h1>
        <div
          className={`${bgIcon || 'bg-primary-200'} relative size-16 overflow-hidden rounded-full lg:size-20`}
        >
          <Image src={icon} alt={title} fill className='object-cover' />
        </div>
      </div>

      <ul className='w-full text-left'>
        {bulletPoints.map((point, index) => (
          <li
            key={index}
            className={`flex items-center gap-3 py-5 ${
              index !== bulletPoints.length - 1
                ? 'border-b border-gray-200'
                : ''
            }`}
          >
            <Image
              src={bulletIcon}
              alt='bullet'
              width={31}
              height={32}
              className='mt-[6px]'
            />
            <span className='text-lg'>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExpCard;
