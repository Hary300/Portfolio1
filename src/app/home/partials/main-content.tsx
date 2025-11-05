'use client';
import Section from '@/components/layouts/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { motion } from 'motion/react';

import Image from 'next/image';
import React from 'react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const Main = () => {
  return (
    <Section title='About' subtitle='The Developer Behind the Pixel'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='custom-container mx-auto grid grid-cols-1 grid-rows-[1fr_0.5fr_0.7fr_0.8fr_0.2fr] gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_0.5fr] lg:grid-rows-2'
      >
        {/* card 1 */}
        <motion.div
          variants={cardVariants}
          className='relative overflow-hidden rounded-lg bg-linear-to-r from-[#134BA6] to-[#2D8CFF] px-4 py-6 transition-transform hover:scale-102 lg:col-span-3 lg:p-10'
        >
          <div className='flex flex-col lg:flex-row lg:justify-between'>
            <div className='mb-4 flex items-start gap-4 lg:mb-0'>
              <div className='bg-primary-200 overflow-hidden rounded-full'>
                <Image
                  src='/images/profile-picture.svg'
                  alt='profile-picture'
                  width='40'
                  height='40'
                />
              </div>
              <div>
                <p className='text-md font-bold text-white'>Hary</p>
                <a
                  href='mailto:h.nugraha.p@gmail.com'
                  className='text-sm font-semibold text-white'
                >
                  h.nugraha.p@gmail.com
                </a>
              </div>
            </div>

            <div className='mb-9xl flex gap-3'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-[#2982F1]'>
                <a href='https://facebook.com' target='_blank'>
                  <Image
                    src='/images/facebook.svg'
                    alt='facebook'
                    width={11}
                    height={21}
                  />
                </a>
              </div>

              <div className='flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-[#2982F1]'>
                <a href='https://instagram.com' target='_blank'>
                  <Image
                    src='/images/instagram.svg'
                    alt='instagram'
                    width={21}
                    height={21}
                  />
                </a>
              </div>

              <div className='flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-[#2982F1]'>
                <a href='https://linkedin.com' target='_blank'>
                  <Image
                    src='/images/linkedin.svg'
                    alt='linkedin'
                    width={17}
                    height={17}
                  />
                </a>
              </div>

              <div className='flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-[#2982F1]'>
                <a href='https://tiktok.com' target='_blank'>
                  <Image
                    src='/images/tiktok.svg'
                    alt='tiktok'
                    width={18}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className='space-y-1.5'>
            <h2 className='text-3xl leading-10 font-bold text-white md:text-5xl md:leading-14'>
              Pushing boundaries through innovation
            </h2>
            <p className='md:text-md md:leading-4xl text-sm leading-7 font-medium text-white'>
              I create frontend solutions that not only look good but also load
              fast, work everywhere, and scale well.
            </p>
          </div>

          <Image
            src='/images/Pattern3.svg'
            alt='pattern3'
            width={485}
            height={370}
            className='absolute -top-20 left-0'
          />
        </motion.div>

        {/* card 2 */}
        <motion.div
          variants={cardVariants}
          className='flex items-end justify-center rounded-lg bg-[#F0DAC1] transition-transform hover:scale-102 lg:col-span-2 lg:col-start-4'
        >
          <Image
            src='/images/developer-image2.svg'
            alt=''
            width='393'
            height='400'
            className='w-60 lg:w-95'
          />
        </motion.div>

        {/* card 3 */}
        <motion.div
          variants={cardVariants}
          className='transition-transform hover:scale-102 lg:col-span-2 lg:row-start-2'
        >
          <Carousel className='relative w-full overflow-hidden'>
            <CarouselContent className='flex gap-4 scroll-smooth'>
              <CarouselItem className='flex w-full shrink-0 justify-center'>
                <Image
                  src='/images/Portfolio1.svg'
                  alt='portfolio1'
                  width={361}
                  height={361}
                  className='lg:w-full'
                />
              </CarouselItem>
              <CarouselItem className='flex w-full shrink-0 justify-center'>
                <Image
                  src='/images/Portfolio2.svg'
                  alt='portfolio2'
                  width={361}
                  height={361}
                  className='lg:w-full'
                />
              </CarouselItem>
              <CarouselItem className='flex w-full shrink-0 justify-center'>
                <Image
                  src='/images/Portfolio3.svg'
                  alt='portfolio3'
                  width={361}
                  height={361}
                  className='lg:w-full'
                />
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className='absolute top-1/2 left-2 -translate-y-1/2'>
              Prev
            </CarouselPrevious>
            <CarouselNext className='absolute top-1/2 right-2 -translate-y-1/2'>
              Next
            </CarouselNext>
          </Carousel>
        </motion.div>

        {/* card 4 */}
        <motion.div
          variants={cardVariants}
          className='relative flex items-center justify-center overflow-hidden rounded-lg bg-linear-to-t from-[#ED6B00] to-[#F3B64C] transition-transform hover:scale-102 lg:col-span-2 lg:col-start-3 lg:row-start-2'
        >
          {/* Lingkaran bertumpuk */}
          <div className='absolute -bottom-42 size-105 rounded-full bg-white/20 lg:size-125'></div>
          <div className='absolute -bottom-29 size-82 rounded-full bg-white/25 lg:size-95'></div>
          <div className='absolute -bottom-19 size-60 rounded-full bg-white/25 lg:size-67'></div>
          <div className='absolute -bottom-8 size-37 rounded-full bg-white/12 lg:size-40'></div>

          {/* Konten di atas background */}
          <div className='absolute z-10 mt-45 max-w-60 text-center lg:mt-66.5 lg:max-w-81'>
            <h1 className='text-2xl font-bold'>
              Built with 10+ Trusted Technologies
            </h1>
          </div>

          {/* tech icon */}
          <div className='absolute top-27 flex size-15.5 items-center justify-center rounded-full bg-white/60 p-3 backdrop-blur-2xl lg:top-40 lg:size-21.5 lg:p-0'>
            <Image
              src='/images/typescript.svg'
              alt='typescript icon'
              width={51}
              height={51}
              className='object-cover'
            />
          </div>

          <div className='absolute top-36 left-11 flex size-15.5 items-center justify-center rounded-full bg-white/60 p-3 backdrop-blur-2xl lg:top-50 lg:left-18 lg:size-21.5 lg:p-0'>
            <Image
              src='/images/javascript.svg'
              alt='javascript icon'
              width={63}
              height={63}
              className='object-cover'
            />
          </div>

          <div className='absolute top-57 -left-3 flex size-15.5 items-center justify-center rounded-full bg-white/60 p-3 backdrop-blur-2xl lg:top-70 lg:-left-5 lg:size-21.5 lg:p-0'>
            <Image
              src='/images/css.svg'
              alt='css icon'
              width={43}
              height={50}
              className='object-cover'
            />
          </div>

          <div className='absolute top-36 right-11 flex size-15.5 items-center justify-center rounded-full bg-white/60 p-3 backdrop-blur-2xl lg:top-50 lg:right-18 lg:size-21.5 lg:p-0'>
            <Image
              src='/images/html.svg'
              alt='html icon'
              width={50}
              height={50}
              className='object-cover'
            />
          </div>

          <div className='absolute top-57 -right-3 flex size-15.5 items-center justify-center rounded-full bg-white/60 p-3 backdrop-blur-2xl lg:top-70 lg:-right-5 lg:size-21.5 lg:p-0'>
            <Image
              src='/images/react.svg'
              alt='react icon'
              width={51}
              height={49}
              className='object-cover'
            />
          </div>
        </motion.div>

        {/* card 5 */}
        <motion.div
          variants={cardVariants}
          className='bg-primary-200 flex items-center justify-center rounded-lg p-4 transition-transform hover:scale-102 lg:col-start-5 lg:row-start-2'
        >
          <Image src='/images/mail.svg' alt='mail' width={44} height={34} />
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Main;
