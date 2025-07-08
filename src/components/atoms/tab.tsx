'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import classes from './tab.module.scss';

interface BrowserTabProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  logo: React.ReactNode;
  href: string;
  title?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  closable?: boolean;
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
      ...props
    },
    ref,
  ) => {
    const segment = useSelectedLayoutSegment();
    const isActive =
      segment === href.slice(1) || (segment === null && href === '/');

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          classes.tab,
          isActive ? classes['tab--active'] : classes['tab--inactive'],
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            'relative flex items-center mx-1.5 py-1 px-1',
            !isActive &&
              'hover:bg-[#C7CCD2] rounded-sm transition duration-100 ease-linear',
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
              <X className="text-[#5F6368] scale-90" />
            </Button>
          </div>
        </div>
      </Link>
    );
  },
);

BrowserTab.displayName = 'BrowserTab';

export { BrowserTab };
