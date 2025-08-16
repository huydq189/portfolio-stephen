'use client';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';
import { ChatLogo, HomeLogo, InfoLogo, ProjectLogo } from '@/assets/svg';
import { BrowserTab } from '@/components/atoms';
import { SearchBar, WindowControls } from '@/components/molecules';
import { cn } from '@/lib/utils';

interface TopBarProps {
  className?: string;
  onTabChange?: (tabName: string) => void;
}

enum TabName {
  Home = 'home',
  About = 'about',
  Projects = 'projects',
  Guestbook = 'guestbook',
}

const tabs = [
  {
    id: TabName.Home,
    href: '/',
    title: 'Hello',
    logo: <HomeLogo width={16} height={16} />,
  },
  {
    id: TabName.About,
    title: 'About me',
    href: '/about',
    logo: <InfoLogo width={16} height={16} />,
  },
  // {
  //   id: TabName.Projects,
  //   title: 'Projects',
  //   href: '/projects',
  //   logo: <ProjectLogo width={16} height={16} />,
  // },
  // {
  //   id: TabName.Guestbook,
  //   title: 'Guest book',
  //   href: '/guestbook',
  //   logo: <ChatLogo width={16} height={16} />,
  // },
];

export function TitleBar({ className }: TopBarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <div
        className={cn(
          'flex w-full h-[42px] bg-[#DEE1E6] rounded-t-lg items-end',
          className,
        )}
      >
        <WindowControls />
        {tabs.map(({ href, id, title, logo }, index) => {
          const currentSegment = segment ?? '';
          const thisHref = href;
          const nextHref = tabs[index + 1]?.href;
          const isNextActive =
            currentSegment === nextHref?.slice(1) ||
            (nextHref === '/' && currentSegment === null);
          const isActive =
            currentSegment === thisHref.slice(1) ||
            (thisHref === '/' && currentSegment === null);

          return (
            <BrowserTab
              href={href}
              key={id}
              title={title}
              logo={logo}
              isActive={isActive}
              showDivider={
                hoveredIndex !== index &&
                hoveredIndex !== index + 1 &&
                !isNextActive
              }
              onPointerEnter={() => setHoveredIndex(index)}
              onPointerLeave={() => setHoveredIndex(null)}
            />
          );
        })}
      </div>
      <SearchBar />
    </>
  );
}
