'use client';

import { Maximize2, Minus, X } from 'lucide-react';
import type React from 'react';
import { Button } from '@/components/atoms/button';
import { cn } from '@/lib/utils';

const controls = [
  {
    label: 'Close',
    bg: '#FF6058',
    border: '#E14942',
    icon: <X className="scale-60" color="#990000" />,
  },
  {
    label: 'Minimize',
    bg: '#FFBD2E',
    border: '#E1A100',
    icon: <Minus className="scale-70" color="#985601" />,
  },
  {
    label: 'Maximize',
    bg: '#28C840',
    border: '#1AAB29',
    icon: <Maximize2 className="scale-45" color="#006201" />,
  },
];

export const WindowControls: React.FC = () => (
  <div className="flex items-center gap-2 px-3 h-full group">
    {controls.map(({ label, bg, border, icon }) => (
      <Button
        key={label}
        size="icon"
        aria-label={label}
        className={cn(
          'relative rounded-full border flex items-center justify-center',
          'hover:scale-115 transition size-[12px] aspect-square p-0',
        )}
        style={{ backgroundColor: bg, borderColor: border }}
      >
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {icon}
        </span>
      </Button>
    ))}
  </div>
);
