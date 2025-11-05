'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { navigationData } from '@/constants/navigation-data';
import Link from 'next/link';
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Sheet } from '@/components/ui/sheet';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const { scrollY } = useScroll();
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(20px)']
  );

  return (
    <motion.header
      style={{
        backdropFilter: backdropBlur,
      }}
      className='fixed z-50 w-full bg-transparent'
    >
      <div className='custom-container flex-between h-16 md:h-21'>
        <div className='flex items-center gap-4'>
          <div className='bg-primary-200 overflow-hidden rounded-full'>
            <Image
              src='/images/profile-picture.svg'
              alt='profile-picture'
              width='40'
              height='40'
            />
          </div>
          <p className='text-xl font-bold text-white'>Hary</p>
        </div>
        <nav className='hidden lg:block'>
          <ul className='flex-start gap-6'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  href={data.href}
                  className='hover:text-primary-300 text-white'
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button asChild className='hidden lg:flex'>
          <Link href='#contact'>Hire Me</Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Menu className='cursor-pointe text-white lg:hidden' />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <div className='flex items-center gap-4'>
                  <div className='bg-primary-200 overflow-hidden rounded-full'>
                    <Image
                      src='/images/profile-picture.svg'
                      alt='profile-picture'
                      width='40'
                      height='40'
                    />
                  </div>
                  <p className='text-xl font-bold text-black'>Hary</p>
                </div>
              </SheetTitle>
            </SheetHeader>

            <div className='px-4'>
              <nav className='mb-6'>
                <ul className='flex flex-col gap-4'>
                  {navigationData.map((data) => (
                    <li key={data.label}>
                      <Link
                        href={data.href}
                        className='hover:text-primary-300 text-black'
                      >
                        {data.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button asChild variant='blue'>
                <Link href='#contact'>Hire Me</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
