'use client';
import dynamic from 'next/dynamic';

export const World = dynamic(() => import('./globe').then((m) => m.World), {
  ssr: false,
});
