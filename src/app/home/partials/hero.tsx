'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const elementVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const Hero = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative overflow-hidden bg-[#0D0A2C]'
    >
      <div className='relative z-10 mx-auto overflow-hidden lg:max-w-[1440px]'>
        <div className='custom-container relative z-40 flex flex-col items-center gap-5 pt-37 lg:flex-row lg:items-start lg:gap-0 lg:pt-70'>
          {/* kiri */}
          <motion.div
            variants={elementVariants}
            className='flex-[3.2] basis-80 lg:pt-10'
          >
            <h1 className='text-5xl leading-tight font-medium text-white md:text-6xl md:leading-20 md:font-bold lg:mb-6'>
              <span className='bg-[#F8B43F] text-black'>Crafting </span>
              Interfaces, One Line at a Time
            </h1>
            <p className='md:mb-[clamp(4rem ,4vw, 9rem)] mb-6 text-xl leading-10 text-white'>
              Build fast, accessible, and responsive web experiences that users
              love.
            </p>
            <Button asChild className='z-50 w-full lg:w-75'>
              <Link href='#contact'>Hire Me</Link>
            </Button>
          </motion.div>

          {/* kanan */}
          <motion.div
            variants={elementVariants}
            className='flex-[6.8] basis-80'
          >
            <Image
              src='/images/developer-image.svg'
              alt='developer image'
              width='760'
              height='760'
            />
          </motion.div>
        </div>
        <Image
          src='/images/Vector11.svg'
          alt='vector11'
          width={1160}
          height={1089}
          className='absolute bottom-0 left-0 z-1'
        />

        <Image
          src='/images/Ellipse14.svg'
          alt='ellipse14'
          width={1355}
          height={1089}
          className='absolute bottom-0 left-0 z-0'
        />

        <Image
          src='/images/Ellipse13.svg'
          alt='ellipse13'
          width={1110}
          height={824}
          className='absolute right-0 bottom-0 z-0'
        />
        <Image
          src='/images/Vector10.svg'
          alt='vector10'
          width={1440}
          height={622}
          className='absolute bottom-0 z-10'
        />
        <Image
          src='/images/Pattern2.svg'
          alt='hero background pattern'
          width={1440}
          height={372}
          className='absolute bottom-0 left-1/2 z-10 -translate-x-1/2'
        />
        <Image
          src='/images/Subtract.svg'
          alt='white oval shape'
          width={1440}
          height={121}
          className='absolute bottom-0 left-1/2 z-50 w-full -translate-x-1/2 lg:-bottom-10'
        />
      </div>

      <Image
        src='/images/Pattern1.svg'
        alt='hero background pattern'
        width={1440}
        height={372}
        className='absolute top-0 left-1/2 -translate-x-1/2'
      />
    </motion.section>
  );
};

export default Hero;
