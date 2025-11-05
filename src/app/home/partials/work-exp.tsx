'use client';
import Section from '@/components/layouts/section';
import Image from 'next/image';
import React from 'react';
import WorkExpCard from '@/components/ui/work-exp-card';
import WorkExpCardMd from '@/components/ui/work-exp-card-md';
import { Variants, motion } from 'motion/react';

const events = [
  {
    period: '2023 - Present',
    imageMd: '/images/adobeImageMd.svg',
    image: '/images/adobeImage.svg',
    imageAlt: 'Adobe Image',
    logo: '/images/adobeLogo.svg',
    logoAlt: 'Adobe Logo',
    title: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
  {
    period: 'Apr 2023 - Jun 2023',
    imageMd: '/images/dribbleImageMd.svg',
    image: '/images/dribbleImage.svg',
    imageAlt: 'Dribble Image',
    logo: '/images/dribbleLogo.svg',
    logoAlt: 'Dribble Logo',
    title: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
  {
    period: 'Jul 2023 - Sep 2023',
    imageMd: '/images/dropboxImageMd.svg',
    image: '/images/dropboxImage.svg',
    imageAlt: 'Dropbox Image',
    logo: '/images/dropboxLogo.svg',
    logoAlt: 'Dropbox Logo',
    title: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
  {
    period: 'Oct 2023 - Dec 2023',
    imageMd: '/images/paypalImageMd.svg',
    image: '/images/paypalImage.svg',
    imageAlt: 'Paypal Image',
    logo: '/images/paypalLogo.svg',
    logoAlt: 'Paypal Logo',
    title: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
];

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

const WorkExp = () => {
  return (
    <div>
      <Section
        title='Work Experience'
        subtitle='A timeline of companies and roles that helped shape my skills.'
        id='projects'
        // image1='/images/Group-3.png'
        // image2='/images/snake2.svg'
        // positionImage1='-bottom-165 left-4 '
        // positionImage2='right-0 bottom-52'
      >
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='mx-auto flex max-w-[1208px] justify-center gap-6 lg:relative lg:block'
        >
          {/* garis lg */}
          <motion.div
            variants={elementVariants}
            className='top-11xl bottom-11xl hidden w-1 bg-gray-300 lg:absolute lg:left-1/2 lg:block lg:-translate-x-1/2'
          />

          {/* Timeline items lg*/}
          <div className='relative hidden flex-col items-center lg:flex'>
            {events.map((event, idx) => (
              <div
                key={idx}
                className={`flex w-full flex-col items-center justify-center lg:flex-row lg:justify-between ${
                  idx !== events.length - 1 ? 'mb-10' : ''
                }`}
              >
                {/* Bullet md breakpoint */}
                <div className='z-10 min-h-[200px] flex-col justify-center lg:hidden lg:min-h-[300px] lg:items-center'>
                  <div className='size-6 rounded-full bg-blue-500' />
                </div>

                {/* Kiri */}
                <motion.div
                  variants={elementVariants}
                  className={`${
                    idx % 2 === 0 ? 'flex justify-end' : 'flex justify-start'
                  } mb-4 lg:mb-0`}
                >
                  {idx % 2 === 0 ? (
                    <Image
                      src={event.image}
                      alt={event.imageAlt}
                      width={551}
                      height={285}
                      className='w-full rounded-lg transition-transform hover:scale-105'
                    />
                  ) : (
                    <WorkExpCard {...event} />
                  )}
                </motion.div>

                {/* Bullet lg breakpoint */}
                <motion.div
                  variants={elementVariants}
                  className='z-10 hidden min-h-[200px] flex-col justify-center lg:flex lg:min-h-[300px] lg:items-center'
                >
                  <div className='size-6 rounded-full bg-blue-500' />
                </motion.div>

                {/* Kanan */}
                <motion.div
                  variants={elementVariants}
                  className={`${
                    idx % 2 === 0 ? 'flex justify-start' : 'flex justify-end'
                  }`}
                >
                  {idx % 2 === 0 ? (
                    <WorkExpCard {...event} />
                  ) : (
                    <Image
                      src={event.image}
                      alt={event.imageAlt}
                      width={551}
                      height={285}
                      className='w-full rounded-lg transition-transform hover:scale-105'
                    />
                  )}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Timeline items md */}
          <div className='relative flex'>
            <div className='absolute left-2.5 h-full w-1 bg-gray-300' />
            <div className='relative flex flex-col gap-4 lg:hidden'>
              {events.map((event, idx) => (
                <div key={idx} className='relative flex items-start pl-10'>
                  {/* Bullet kiri */}
                  <motion.div
                    variants={elementVariants}
                    className='absolute top-0 left-0 z-10 flex items-center justify-center'
                  >
                    <div className='size-6 rounded-full bg-blue-500' />
                  </motion.div>

                  {/* Card */}
                  <WorkExpCardMd {...event} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default WorkExp;
