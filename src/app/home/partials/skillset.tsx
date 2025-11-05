'use client';
import Section from '@/components/layouts/section';
import SkillCard from '@/components/ui/skill-card';
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

const Skillset = () => {
  return (
    <Section
      title='Skillset'
      subtitle='Skills That Build Great Interfaces'
      bgColor='bg-primary-200'
      titleColor='text-white'
      subtitleColor='text-white'
      id='skills'
    >
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='custom-container mx-auto grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'
      >
        {/* card 1 */}
        <SkillCard
          skill='HTML'
          value={90}
          icon='/images/html.svg'
          color='#F3B64C'
        />

        {/* card 2 */}
        <SkillCard
          skill='CSS'
          value={90}
          icon='/images/css.svg'
          color='#F3B64C'
        />

        {/* card 3 */}
        <SkillCard
          skill='Javascript'
          value={80}
          icon='/images/javascript.svg'
          color='#F3B64C'
        />

        {/* card 4 */}
        <SkillCard
          skill='React JS'
          value={50}
          icon='/images/react.svg'
          color='#F3B64C'
        />

        {/* card 5 */}
        <SkillCard
          skill='Mongo DB'
          value={0}
          icon='/images/mongodb.svg'
          color='#F3B64C'
        />

        {/* card 6 */}
        <SkillCard
          skill='Docker'
          value={0}
          icon='/images/docker.svg'
          color='#F3B64C'
        />

        {/* card 7 */}
        <SkillCard
          skill='Express JS'
          value={0}
          icon='/images/expressjs.svg'
          color='#F3B64C'
        />

        {/* card 8 */}
        <SkillCard
          skill='PostgreSQL'
          value={0}
          icon='/images/postgresql.svg'
          color='#F3B64C'
        />
      </motion.div>
    </Section>
  );
};

export default Skillset;
