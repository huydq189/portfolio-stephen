'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import classes from './tab.module.css';

interface BrowserTabProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  logo: React.ReactNode;
  href: string;
  title?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  closable?: boolean;
  showDivider?: boolean;
  isActive?: boolean;
}

const BrowserTab = React.forwardRef<HTMLAnchorElement, BrowserTabProps>(
  (
    {
      logo,
      href,
      className,
      title = 'New Tab',
      icon,
      onClose,
      closable = true,
      showDivider = false,
      isActive = false,
      ...props
    },
    ref,
  ) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          classes.tab,
          isActive ? classes['tab--active'] : classes['tab--inactive'],
          className,
          'dark:bg-[#202124]',
        )}
        {...props}
      >
        <div
          className={cn(
            'relative flex items-center mx-1.5 py-1 px-1',
            !isActive &&
              'hover:bg-[#C7CCD2] rounded-lg transition duration-200 ease-linear',
          )}
        >
          <div className={cn('flex items-center gap-2.5 flex-1 p-0.5')}>
            <div className="flex-shrink-0">{logo}</div>
            <div className="flex-1">
              <div className="text-xs font-medium truncate cursor-default">
                {title}
              </div>
            </div>
            <Button
              className="size-4"
              variant="ghost"
              size="icon"
              aria-label="Close tab"
            >
              <X className="text-[#5F6368] scale-80" />
            </Button>
          </div>
        </div>
        <span
          className={cn(
            'absolute right-0 top-[6px] bottom-[12px] w-[1.8px] bg-[#5F6368] rounded-[10px] z-[1] pointer-events-none transition-opacity duration-200',
            !isActive && showDivider !== false ? 'opacity-30' : 'opacity-0',
          )}
          aria-hidden="true"
        />
      </Link>
    );
  },
);

BrowserTab.displayName = 'BrowserTab';

export { BrowserTab };
