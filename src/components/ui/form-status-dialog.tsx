import Image from 'next/image';
import React from 'react';

import { Button } from './button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
  loading?: boolean;
}

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  loading,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader
          className={`relative w-full py-10 ${
            variant === 'success'
              ? 'bg-linear-to-t from-[#ED6B00] to-[#F3B64C]'
              : 'bg-neutral-300'
          } rounded-t-lg`}
        >
          <Image
            src={
              variant === 'success'
                ? '/images/completeImage.svg'
                : '/images/failedImage.svg'
            }
            alt={variant === 'success' ? 'success' : 'error'}
            width={264}
            height={200}
            className='mx-auto block'
          />
          <Image
            src={variant === 'success' ? '/images/confetti.svg' : ''}
            alt={variant === 'success' ? 'success' : 'error'}
            width={381}
            height={163}
            className='absolute top-0 left-1/2 -translate-x-1/2'
          />
        </DialogHeader>
        <div className='space-y-6 px-6 pt-8'>
          <DialogTitle>
            {variant === 'success'
              ? 'Got Your Message!'
              : 'Message Failed to Send'}
          </DialogTitle>
          <DialogDescription>
            {variant === 'success'
              ? 'Really appreciate you reaching out. I’ll be in touch soon.'
              : 'Sorry about that. Please check your connection and try again.'}
          </DialogDescription>
          <DialogClose asChild>
            <Button variant='blue' className='mx-auto mt-6 w-full md:mt-8'>
              {loading ? 'Loading...' : 'Back to Home'}
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
