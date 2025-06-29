import { X } from 'lucide-react';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import classes from './tab.module.scss';

export interface BrowserTabProps extends React.HTMLAttributes<HTMLDivElement> {
  logo: React.FC;
  title?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  closable?: boolean;
  active?: boolean;
}

const BrowserTab = React.forwardRef<HTMLDivElement, BrowserTabProps>(
  (
    {
      logo,
      className,
      title = 'New Tab',
      icon,
      onClose,
      closable = true,
      active = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          classes.tab,
          active ? classes['tab--active'] : classes['tab--inactive'],
          className,
        )}
        {...props}
      >
        <div className="flex items-center px-5 py-2">
          <div
            className={cn(
              'flex items-center gap-2.5 flex-1 transition-colors duration-200 p-0.5',
              !active && classes['tab--inactive-content'],
            )}
          >
            {/* Logo */}
            <div className="flex-shrink-0">{React.createElement(logo)}</div>

            {/* Title */}
            <div className="flex-1">
              <div className="text-xs font-medium truncate">{title}</div>
            </div>

            {/* Close Button */}
            <Button
              className="size-4"
              variant="ghost"
              size="icon"
              aria-label="Close tab"
            >
              <X size={12} className="text-[#5F6368]" />
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

BrowserTab.displayName = 'BrowserTab';

export { BrowserTab };
