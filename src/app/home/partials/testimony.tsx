import Section from '@/components/layouts/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import TestimonyCard from '@/components/ui/testimony-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Testimony = () => {
  return (
    <Section
      title='Testimony'
      subtitle='Built with Trust & Collaboration'
      align='left'
      paddingBottom='pb-6'
      // image2='/images/snake2.svg'
      // positionImage2='-top-165 -left-223'
    >
      <Carousel className='relative w-full overflow-visible'>
        <CarouselContent className='flex scroll-smooth pb-6'>
          {/* Testimony 1 */}
          <CarouselItem className='flex shrink-0 justify-center transition-transform md:basis-[45%] lg:basis-1/3'>
            <TestimonyCard
              image='./images/testimonyImage1.svg'
              rating={3}
              text='"Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman."'
              name='— Sarah Lim'
              job='Product Manager at Loopware'
            />
          </CarouselItem>

          {/* Testimony 2 */}
          <CarouselItem className='flex shrink-0 justify-center md:basis-[45%] lg:basis-1/3'>
            <TestimonyCard
              image='./images/testimonyImage2.svg'
              rating={5}
              text='"Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman."'
              name='— Sarah Lim'
              job='Product Manager at Loopware'
            />
          </CarouselItem>

          {/* Testimony 3 */}
          <CarouselItem className='flex shrink-0 justify-center md:basis-[45%] lg:basis-1/3'>
            <TestimonyCard
              image='./images/testimonyImage3.svg'
              rating={4}
              text='"Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman."'
              name='— Sarah Lim'
              job='Product Manager at Loopware'
            />
          </CarouselItem>

          {/* Testimony 4 */}
          <CarouselItem className='flex shrink-0 justify-center md:basis-[45%] lg:basis-1/3'>
            <TestimonyCard
              image='./images/testimonyImage4.svg'
              rating={1}
              text='"Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman."'
              name='— Sarah Lim'
              job='Product Manager at Loopware'
            />
          </CarouselItem>

          {/* Testimony 5 */}
          <CarouselItem className='flex shrink-0 justify-center md:basis-[45%] lg:basis-1/3'>
            <TestimonyCard
              image='./images/testimonyImage1.svg'
              rating={0}
              text='"Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman."'
              name='— Sarah Lim'
              job='Product Manager at Loopware'
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
    </Section>
  );
};

export default Testimony;
