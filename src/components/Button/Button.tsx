import React from 'react';
import { ReactChildrenType } from '@/types';
import clsx from 'clsx';

export type ButtonProps = ReactChildrenType &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button className={clsx('btn', className)} {...props}>
      {children}
    </button>
  );
}
