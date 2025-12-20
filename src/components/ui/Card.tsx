'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  hoverable?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hoverable = false, children, ...props }, ref) => {
    const variants = {
      default: 'bg-zinc-900 border border-zinc-800',
      elevated: 'bg-zinc-900 shadow-xl shadow-black/20',
      outlined: 'bg-transparent border-2 border-zinc-800',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl overflow-hidden',
          variants[variant],
          hoverable && 'transition-all duration-300 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/10 cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card Header
export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 py-4 border-b border-zinc-800', className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

// Card Title
export const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-lg font-semibold text-white', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

// Card Content
export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 py-4', className)}
      {...props}
    />
  )
);
CardContent.displayName = 'CardContent';

// Card Footer
export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 py-4 border-t border-zinc-800 bg-zinc-900/50', className)}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';

export default Card;
