'use client';
import Section from '@/components/layouts/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'motion/react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const elementVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Portfolio = () => {
  return (
    <Section
      title='Portofolio'
      subtitle='Built with Passion, Shipped with Precision'
    >
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='relative w-full overflow-visible pb-6'
      >
        <motion.div variants={elementVariants}>
          <Carousel className='relative w-full overflow-visible'>
            <CarouselContent className='flex gap-4 scroll-smooth'>
              <CarouselItem className='flex shrink-0 justify-center lg:basis-1/3'>
                <Image
                  src='/images/Portfolio1.svg'
                  alt='portfolio1'
                  width={361}
                  height={361}
                  className='transition-transform hover:scale-105 lg:w-full'
                />
              </CarouselItem>
              <CarouselItem className='flex shrink-0 justify-center lg:basis-1/3'>
                <Image
                  src='/images/Portfolio2.svg'
                  alt='portfolio2'
                  width={361}
                  height={361}
                  className='transition-transform hover:scale-105 lg:w-full'
                />
              </CarouselItem>
              <CarouselItem className='flex shrink-0 justify-center lg:basis-1/3'>
                <Image
                  src='/images/Portfolio3.svg'
                  alt='portfolio3'
                  width={361}
                  height={361}
                  className='transition-transform hover:scale-105 lg:w-full'
                />
              </CarouselItem>
            </CarouselContent>

            <div className='absolute -bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-4'>
              <CarouselPrevious>
                <ChevronLeft className='h-6 w-6' />
              </CarouselPrevious>
              <CarouselNext>
                <ChevronRight className='h-6 w-6' />
              </CarouselNext>
            </div>
          </Carousel>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Portfolio;
