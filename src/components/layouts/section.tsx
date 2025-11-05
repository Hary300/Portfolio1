import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  id?: string;
  bgColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  image1?: string | StaticImageData;
  image2?: string | StaticImageData;
  positionImage1?: string;
  positionImage2?: string;
  align?: 'center' | 'left';
  padding?: 'yes' | 'no';
  rounded?: string;
  paddingBottom?: string;
  className?: string;
};
const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
  bgColor,
  titleColor,
  subtitleColor,
  image1,
  image2,
  positionImage1,
  positionImage2,
  paddingBottom,
  align = 'center',
  padding = 'yes',
  rounded,
  className,
}) => {
  const alignmentClass =
    align === 'left' ? 'text-center lg:text-left' : 'text-center';

  const paddingClass =
    padding === 'yes' ? 'custom-container py-8 md:py-10' : '';

  return (
    <div
      className={cn(
        `mx-auto max-w-[1440px] ${bgColor || 'bg-white'} relative overflow-hidden ${rounded} ${paddingBottom}`,
        className
      )}
    >
      {image1 && (
        <Image
          src={image1}
          alt='snake1'
          width={1440}
          height={2254}
          className={`absolute z-0 hidden md:block ${positionImage1}`}
        />
      )}
      {image2 && (
        <Image
          src={image2}
          alt='snake2'
          width={1178}
          height={1380}
          className={`absolute z-0 ${positionImage2}`}
        />
      )}
      <div className={`${paddingClass} relative z-10`} id={id}>
        <div className={cn(alignmentClass, className)}>
          <h2
            className={`inline-block rounded-full border ${titleColor || 'text-black'} border-neutral-300 px-4 py-2 text-sm font-bold`}
          >
            {title}
          </h2>
          <h3
            className={`mt-4 text-3xl font-bold md:font-extrabold lg:text-5xl ${subtitleColor || 'text-black'}`}
          >
            {subtitle}
          </h3>
        </div>

        <div className='mt-6 md:mt-16'>{children}</div>
      </div>
    </div>
  );
};

export default Section;
