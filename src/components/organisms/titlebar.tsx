'use client';
import { ChatLogo } from '@/assets/svg/chat-logo';
import { HomeLogo } from '@/assets/svg/home-logo';
import { InfoLogo } from '@/assets/svg/info-logo';
import { ProjectLogo } from '@/assets/svg/project-logo';
import { BrowserTab } from '@/components/atoms/tab';
import { WindowControls } from '@/components/molecules/window-controls';
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
  {
    id: TabName.Projects,
    title: 'Projects',
    href: '/projects',
    logo: <ProjectLogo width={16} height={16} />,
  },
  {
    id: TabName.Guestbook,
    title: 'Guest book',
    href: '/guestbook',
    logo: <ChatLogo width={16} height={16} />,
  },
];

export function TitleBar({ className }: TopBarProps) {
  return (
    <div
      className={cn(
        'flex w-full h-[42px] bg-[#DEE1E6] rounded-t-lg items-end',
        className,
      )}
    >
      <WindowControls />
      {tabs.map(({ href, id, title, logo }) => (
        <BrowserTab href={href} key={id} title={title} logo={logo} />
      ))}
    </div>
  );
}
