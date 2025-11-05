'use client';
import Section from '@/components/layouts/section';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { z } from 'zod';

import { Button } from '@/components/ui/button';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import FormStatusDialog from '@/components/ui/form-status-dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion, Variants } from 'motion/react';

const services = [
  'Web Development',
  'Cloud Solutions',
  'Mobile App Development',
  'Software Development',
  'UI/UX Design',
  'Other',
];

const contactSchema = z.object({
  name: z
    .string()
    .nonempty('Name is required')
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name must be at most 50 characters long'),
  email: z
    .string()
    .nonempty('Email is required')
    .email('Please enter a valid email address'),
  message: z
    .string()
    .nonempty('Message is required')
    .min(20, 'Message must be at least 20 characters long')
    .max(500, 'Message must be at most 500 characters long'),
});

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ContactSection = () => {
  const [loading, setLoading] = React.useState(false);

  const [showDialog, setShowDialog] = React.useState(false);
  const [variant, setVariant] = React.useState<'success' | 'error'>('success');

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      console.log('Data dikirim ke EmailJS:', data);
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      form.reset();
      setVariant('success');
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setShowDialog(true);
      setLoading(false);
    }
  }
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      id='contact'
      className='mx-auto max-w-[1440px] bg-[#0A0D12] pb-10 text-white lg:pb-30'
    >
      <div className='custom-container flex flex-col lg:flex-row lg:gap-27.5'>
        {/* left */}

        <motion.div
          variants={cardVariants}
          className='mb-6 flex flex-[4.8] flex-col gap-4 lg:mb-0 lg:justify-between lg:gap-0'
        >
          <div className='flex items-start gap-4'>
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

          <div className='flex flex-col space-y-6'>
            <h2 className='text-3xl leading-10 font-bold text-white md:text-5xl md:leading-14'>
              Great results begin with clear ideas.
            </h2>

            <div className='flex gap-3'>
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
        </motion.div>

        <div className='mb-6 block h-px w-full bg-[#252B37] lg:hidden' />

        {/* right */}
        <motion.div variants={cardVariants} className='flex-[5.2]'>
          <Section
            title='Contact'
            subtitle='Start Your Next Project'
            bgColor='bg-[#0A0D12]'
            titleColor='text-white'
            subtitleColor={cn('lg:text-[40px] text-white')}
            align='left'
            padding='no'
            className='text-left'
          >
            <Form {...form}>
              <form
                className='mx-auto max-w-180 space-y-5'
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Name<span className='text-red-500'>*</span>
                      </FormLabel>
                      <Input
                        disabled={loading}
                        placeholder='What should I call you?...'
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email<span className='text-red-500'>*</span>
                      </FormLabel>
                      <Input
                        disabled={loading}
                        placeholder='Where can I reach you? ...'
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Message<span className='text-red-500'>*</span>
                      </FormLabel>
                      <Textarea
                        disabled={loading}
                        placeholder='Tell me about your project or just say hi :) ...'
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button disabled={loading} variant='blue' className='w-full'>
                  {loading ? <ClipLoader size={20} color='#fff' /> : 'Hire Me'}
                </Button>
              </form>
            </Form>
            <FormStatusDialog
              open={showDialog}
              variant={variant}
              loading={loading}
              onOpenChange={setShowDialog}
            />
          </Section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
