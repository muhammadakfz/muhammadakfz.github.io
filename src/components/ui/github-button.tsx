 'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const githubButtonVariants = cva(
  'cursor-pointer relative overflow-hidden will-change-transform backface-visibility-hidden transform-gpu transition-transform duration-200 ease-out hover:scale-105 group whitespace-nowrap focus-visible:outline-hidden inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background disabled:pointer-events-none disabled:opacity-60 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-[color:var(--foreground)] hover:bg-[color:var(--foreground)/0.9] text-[color:var(--primary-foreground)] border-[color:var(--sidebar-border)]',
        outline:
          'bg-background text-accent-foreground border border-input hover:bg-accent',
      },
      size: {
        default:
          'h-8.5 rounded-md px-3 gap-2 text-[0.8125rem] leading-none [&_svg]:size-4 gap-2',
        sm: 'h-7 rounded-md px-2.5 gap-1.5 text-xs leading-none [&_svg]:size-3.5 gap-1.5',
        lg: 'h-10 rounded-md px-4 gap-2.5 text-sm leading-none [&_svg]:size-5 gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface GithubButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof githubButtonVariants> {
  repoUrl?: string;
  label?: string;
  showGithubIcon?: boolean;
  showLabel?: boolean;
  animationDuration?: number;
}

function GithubButton({
  repoUrl,
  label = 'GitHub',
  showGithubIcon = true,
  showLabel = true,
  animationDuration,
  variant = 'default',
  size = 'default',
  className,
  ...props
}: GithubButtonProps & Record<string, any>) {
  const classes = cn(githubButtonVariants({ variant, size }), className);

  const content = (
    <>
      {showGithubIcon && (
        <svg
          role="img"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={showLabel ? 'mr-2' : ''}
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      )}
  <span className={showLabel ? undefined : 'sr-only'}>{label}</span>
    </>
  );

  if (repoUrl) {
    return (
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={label}
        {...(props as any)}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} aria-label={label} {...(props as any)}>
      {content}
    </button>
  );
}

export { GithubButton, githubButtonVariants };
export type { GithubButtonProps };
