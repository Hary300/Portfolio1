'use client';
import { Icon } from '@iconify/react';
import { Variants, motion } from 'motion/react';

import Image, { StaticImageData } from 'next/image';
import React from 'react';

type WorkExpCardProps = {
  imageMd: string | StaticImageData;
  imageAlt: string;
  period: string;
  logo: string | StaticImageData;
  logoAlt: string;
  title: string;
  description: string;
};

const elementVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const WorkExpCardMd: React.FC<WorkExpCardProps> = ({
  imageMd,
  imageAlt,
  period,
  logo,
  logoAlt,
  title,
  description,
}) => {
  return (
    <motion.div variants={elementVariants}>
      <Image
        src={imageMd}
        alt={imageAlt}
        width={551}
        height={285}
        className='rounded-t-lg object-cover'
      />
      <div className='flex w-full max-w-[551px] flex-col gap-2 overflow-hidden rounded-lg bg-white p-5 shadow-md transition-transform hover:scale-105'>
        <div className='flex items-center gap-4'>
          <Icon
            icon='lets-icons:date-today-duotone'
            width={32}
            height={32}
            className='text-primary-200'
          />
          <p className='text-md font-bold lg:text-lg'>{period}</p>
        </div>

        <Image src={logo} alt={logoAlt} width={97} height={35} />
        <h1 className='text-lg font-bold lg:text-2xl'>{title}</h1>
        <p className='text-md font-medium'>{description}</p>
      </div>
    </motion.div>
  );
};

export default WorkExpCardMd;
