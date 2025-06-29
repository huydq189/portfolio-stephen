'use client';
import { cn } from '@/lib/utils';
import { BrowserTab } from '../atoms/tab';
import { WindowControls } from '../molecules/window-controls';

interface TopBarProps {
  className?: string;
}

export function TitleBar({ className }: TopBarProps) {
  return (
    <div
      className={cn(
        'flex w-full h-[42px] bg-[#DEE1E6] rounded-t-lg items-end',
        className,
      )}
    >
      <WindowControls />
      <BrowserTab title="Home" active />
    </div>
  );
}
