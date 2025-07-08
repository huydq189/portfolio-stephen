'use client';

import { type MotionProps, motion } from 'motion/react';
import type { ReactNode } from 'react';

type EnterAnimationProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
} & MotionProps;

export const EnterAnimation = ({
  children,
  className = '',
  delay = 0,
  ...motionProps
}: EnterAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
