'use client';
import React from 'react';
import { Icon } from '@iconify/react';
import Image, { StaticImageData } from 'next/image';
import { Variants, motion } from 'motion/react';

const elementVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

type TestimonyCardProps = {
  image: string | StaticImageData;
  name: string;
  job: string;
  text: string;
  rating: number; // 0–5
};

const TestimonyCard: React.FC<TestimonyCardProps> = ({
  image,
  rating,
  text,
  name,
  job,
}) => {
  return (
    <motion.div variants={elementVariants}>
      <div className='relative mt-15 flex w-full max-w-91 flex-col rounded-2xl bg-white p-6 shadow-md transition-transform hover:scale-105 lg:mt-10'>
        {/* Foto */}
        <div className='absolute -top-10 left-7.5 mb-4 flex items-center gap-4 lg:mb-5'>
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className='h-14 w-14 rounded-full border border-gray-200 object-cover'
          />
        </div>

        {/* Rating */}
        <div className='mb-6 lg:mb-17.25'>
          <div className='mb-3 flex gap-1'>
            {[1, 2, 3, 4, 5].map((num) => (
              <Icon
                key={num}
                icon={
                  num <= Math.floor(rating)
                    ? 'mdi:star'
                    : num - rating <= 0.5
                      ? 'mdi:star-half-full'
                      : 'mdi:star-outline'
                }
                className='text-yellow-400'
                width={20}
                height={20}
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className='text-sm text-gray-600'>“{text}”</p>
        </div>

        {/* Name and info */}
        <div>
          <h3 className='text-lg font-bold'>{name}</h3>
          <p className='text-sm text-gray-500'>{job}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonyCard;
