'use client';
import Section from '@/components/layouts/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQData } from '@/constants/accordion-data';
import { Variants, motion } from 'motion/react';
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

const elementVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Faq = () => {
  return (
    <div
      id='faq'
      className='relative mx-auto flex max-w-[1440px] overflow-hidden'
    >
      <div className='custom-container w-full pt-10 pb-25 md:pt-25 md:pb-50.5 lg:pb-60.5'>
        <div className='custom-container rounded-[32px] bg-[#FFFFFF]/30 p-4'>
          <Section
            title='FAQ'
            subtitle='Need More Info? Start Here'
            rounded='rounded-[32px]'
          >
            <motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
            >
              <Accordion type='multiple' className='mx-auto w-full'>
                {FAQData.map((item, index) => (
                  <motion.div key={index} variants={elementVariants}>
                    <AccordionItem value={index.toString()}>
                      <AccordionTrigger>{item.title}</AccordionTrigger>
                      <AccordionContent>{item.description}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </Section>
        </div>
      </div>
      <Image
        src='/images/vector10.svg' //white
        alt='vector10'
        width={1440}
        height={622}
        className='absolute bottom-0 z-[-1] scale-150 md:scale-100'
      />
      <Image
        src='/images/Vector11.svg' //sky blue
        alt='vector11'
        width={1160}
        height={1089}
        className='absolute bottom-0 left-70 z-[-2] scale-250 md:left-0 md:scale-100'
      />

      <Image
        src='/images/Ellipse13.svg' // purple
        alt='ellipse13'
        width={1110}
        height={824}
        className='absolute right-0 bottom-0 z-[-2] hidden md:block md:scale-100'
      />

      <div className='absolute top-150 -right-150 z-[-2] block h-150 w-250 rotate-20 rounded-full bg-[#0025CE] blur-[200px] md:hidden' />

      {/* black oval */}
      <Image
        src='/images/subtract2.svg'
        alt='white oval shape'
        width={1440}
        height={121}
        className='absolute bottom-0 left-1/2 z-40 w-full -translate-x-1/2 lg:-bottom-10'
      />
    </div>
  );
};

export default Faq;
