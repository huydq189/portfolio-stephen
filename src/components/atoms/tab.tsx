import * as React from 'react';
import { cn } from '@/lib/utils';
import classes from './tab.module.scss';

export interface BrowserTabProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  closable?: boolean;
  active?: boolean;
}

const BrowserTab = React.forwardRef<HTMLDivElement, BrowserTabProps>(
  (
    {
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
        className={cn(classes['tab-active'], className)}
        {...props}
      ></div>
    );
  },
);

BrowserTab.displayName = 'BrowserTab';

export { BrowserTab };
