'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { PlusIcon, MinusIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn(
        'mb-3 rounded-xl border border-[#D5D7DA] p-5 lg:mb-4',
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'group focus-visible:ring-ring/50 text-md flex flex-1 items-start justify-between gap-4 rounded-md py-1 text-left font-bold transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 md:py-4 lg:text-2xl',
          className
        )}
        {...props}
      >
        {children}
        <div className='flex size-7 cursor-pointer items-center justify-center rounded-full border border-[#D5D7DA] transition-all duration-200 group-data-[state=open]:bg-[#134BA6]/10'>
          <PlusIcon className='size-4 transition-transform duration-200 group-data-[state=open]:hidden' />

          <MinusIcon className='hidden size-4 transition-transform duration-200 group-data-[state=open]:block' />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-md overflow-hidden border-t border-t-[#D5D7DA] pt-4 lg:text-xl'
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
