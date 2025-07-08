'use client';

import { type MotionProps, motion } from 'motion/react';
import type { ReactNode } from 'react';

type AnimationProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
} & MotionProps;

export const Motion = ({
  children,
  className = '',
  delay = 0,
  ...motionProps
}: AnimationProps) => {
  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
};
