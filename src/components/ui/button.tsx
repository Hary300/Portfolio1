import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex justify-center items-center shrink-0 disabled:pointer-events-none disabled:opacity-50 cursor-pointer outline-none whitespace-nowrap',
  {
    variants: {
      variant: {
        default:
          'bg-white text-md font-bold text-neutral-950 rounded-full hover:bg-gray-100 hover:scale-102 active:scale-95 transition-transform',

        blue: 'bg-primary-200 text-md font-bold text-white rounded-full hover:scale-102 active:scale-95 transition-transform',

        outline:
          'border border-neutral-300 hover:bg-gray-100 rounded-full hover:scale-102 active:scale-95 transition-transform',
      },
      size: {
        default: 'h-12 px-30',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,

  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
