import {
  ChartArea,
  CircleX,
  GitBranch,
  RefreshCcw,
  TriangleAlert,
} from 'lucide-react';
import Link from 'next/link';
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
            <GitBranch size={12} />
            <p>main</p>
          </Link>
          <button
            type="button"
            aria-label="refetch"
            className="items-center gap-x-2 px-2 py-1 md:flex hidden group hover:text-foreground text-muted-foreground transition-colors"
            data-umami-event="footer-refresh-btn"
          >
            <RefreshCcw
              size={12}
              className="group-active:rotate-180 transition-transform"
            />
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
                <ChartArea size={16} />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Statistics</TooltipContent>
          </Tooltip>

          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <div className="items-center gap-x-1 px-2 py-1 md:flex hidden text-muted-foreground">
                <CircleX size={12} />
                <p>0</p>
                <TriangleAlert size={12} className="text-base" />
                <p>0</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>No problems</TooltipContent>
          </Tooltip>
        </div>

        <div className="flex items-center divide-x divide border-l">
          <Link
            href="mailto:doquochuy189@gmail.com"
            target="_blank"
            className="items-center gap-x-1.5 px-2 py-1 md:flex hidden text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Available for work</span>
          </Link>
        </div>
      </footer>
    </TooltipProvider>
  );
};
