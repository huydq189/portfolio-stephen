import Link from 'next/link';

import { BiGitBranch, BiLineChart, BiRefresh, BiXCircle } from 'react-icons/bi';
import { IoLogoGithub, IoWarningOutline } from 'react-icons/io5';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/atoms/tooltip';

export const Footer = () => {
  return (
    <TooltipProvider>
      <footer className="border-t text-off-white text-xs flex items-center justify-between select-none bg-layout relative z-30">
        <div className="flex items-center border-r divide-x">
          <Link
            target="_blank"
            href="https://github.com/huydq189/portfolio-stephen"
            className="flex items-center gap-x-2 px-2 py-1 hover:text-foreground text-muted-foreground transition-colors"
          >
            <BiGitBranch className="text-lg" />
            <p>main</p>
          </Link>
          <button
            type="button"
            aria-label="refetch"
            className="items-center gap-x-2 px-2 py-1 md:flex hidden group hover:text-foreground text-muted-foreground transition-colors"
            data-umami-event="footer-refresh-btn"
          >
            <BiRefresh className="text-xl group-active:rotate-180 transition-transform" />
          </button>

          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={''}
                target="_blank"
                aria-label="statistics"
                className="items-center gap-x-2 px-2 py-1 md:flex hidden hover:text-foreground text-muted-foreground transition-colors"
                data-umami-event="footer-statistics-btn"
              >
                <BiLineChart className="text-xl" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Statistics</TooltipContent>
          </Tooltip>

          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <div className="items-center gap-x-1 px-2 py-1 md:flex hidden text-muted-foreground">
                <BiXCircle className="text-base" />
                <p>0</p>
                <IoWarningOutline className="text-base" />
                <p>0</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>No problems</TooltipContent>
          </Tooltip>

          <Link
            href="mailto:doquochuy189@gmail.com"
            target="_blank"
            className="items-center gap-x-1.5 px-2 py-1 md:flex hidden text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Available for work!</span>
          </Link>
        </div>

        <div className="flex items-center divide-x divide border-l">
          <Link
            target="_blank"
            href="https://github.com/huydq189"
            className="flex items-center gap-x-1 px-2 py-1 hover:text-foreground text-muted-foreground transition-colors"
          >
            <p>Stephen</p>
            <IoLogoGithub className="text-lg" />
          </Link>
        </div>
      </footer>
    </TooltipProvider>
  );
};
