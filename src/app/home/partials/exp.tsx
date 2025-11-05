'use client';
import Section from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import ExpCard from '@/components/ui/exp-card';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Exp = () => {
  return (
    <Section
      title='Superiority'
      subtitle='Built with design, speed, and UX in mind.'
      id='about'
    >
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='flex flex-col gap-6 lg:flex-row'
      >
        <ExpCard
          title='Working with me'
          icon='/images/profile-picture.svg'
          bgColor='bg-[#F3B64C]'
          textWeight='font-bold'
          bulletPoints={[
            'React Expert',
            'Precise Website Implementation',
            'TypeScript Proficiency',
            'Clean, Maintainable Code',
            'Responsive Website Development',
            'UI Design Proficiency (Figma)',
          ]}
        />

        <ExpCard
          title='Another Developer'
          icon='/images/unknown-profile.svg'
          bgIcon='bg-[#E9EAEB]'
          bulletPoints={[
            'Basic React Knowledge',
            'Inconsistent Design Translation',
            'Little to No TypeScript Knowledge',
            'Unstructured Code',
            'Inconsistent Responsiveness',
            'No Design Skills',
          ]}
        />
      </motion.div>
      <div className='mx-auto mt-6 lg:max-w-80'>
        <Button asChild variant='blue'>
          <Link href='#contact'>Hire Me</Link>
        </Button>
      </div>
    </Section>
  );
};

export default Exp;
