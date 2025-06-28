import { cn } from '@/lib/utils';
import { WindowControls } from '../molecules/window-controls';

interface TopBarProps {
  tabName?: string;
  favicon?: string;
  className?: string;
  onTabClose?: () => void;
  onNewTab?: () => void;
}

export function TopBar({
  tabName = '{tab_name}',
  // favicon = 'https://cdn.builder.io/api/v1/image/assets/TEMP/b821b8a57cd10473f11d01e51d37734d70b01916?width=32',
  className,
  onTabClose,
  onNewTab,
}: TopBarProps) {
  return (
    <div
      className={cn(
        'flex w-full h-[42px] justify-center items-center bg-[#DEE1E6] rounded-t-lg relative',
        className,
      )}
    >
      {/* Browser Controls */}
      <WindowControls />

      {/* Tab and Plus Button Container */}
      <div className="absolute left-[72px] top-2 flex items-center h-[34px] px-2">
        {/* Browser Tab */}
        <div className="flex items-center relative">
          {/* Left Curve */}
          <svg
            className="w-1.5 h-2 fill-white relative"
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>control bar</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 8C1.38462 7.05882 4.61538 6.58824 6 0C6 0 6 8 6 8H0Z"
              fill="white"
            />
          </svg>

          {/* Tab Content */}
          <div className="flex items-center gap-2 px-2 py-2 bg-white rounded-t-lg relative min-w-0">
            <div className="w-4 h-4 flex-shrink-0" />
            <span className="text-[#494C4F] text-xs font-normal leading-normal tracking-[0.2px] font-['Roboto','-apple-system','Roboto','Helvetica','sans-serif'] truncate max-w-[100px] sm:max-w-[150px]">
              {tabName}
            </span>
            <button
              type="button"
              onClick={onTabClose}
              className="w-[18px] h-[18px] flex-shrink-0 hover:bg-gray-100 rounded p-0.5 transition-colors"
              aria-label="Close tab"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <title>Close tab</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5836 5.42207C12.3618 5.20023 12.0034 5.20023 11.7816 5.42207L9 8.19795L6.21843 5.41638C5.99659 5.19454 5.63823 5.19454 5.41638 5.41638C5.19454 5.63823 5.19454 5.99659 5.41638 6.21843L8.19795 9L5.41638 11.7816C5.19454 12.0034 5.19454 12.3618 5.41638 12.5836C5.63823 12.8055 5.99659 12.8055 6.21843 12.5836L9 9.80205L11.7816 12.5836C12.0034 12.8055 12.3618 12.8055 12.5836 12.5836C12.8055 12.3618 12.8055 12.0034 12.5836 11.7816L9.80205 9L12.5836 6.21843C12.7998 6.00228 12.7998 5.63823 12.5836 5.42207Z"
                  fill="#3C4043"
                />
              </svg>
            </button>
          </div>

          {/* Right Curve */}
          <svg
            className="w-1.5 h-2 fill-white relative"
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>control bar</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 8C4.61538 7.05882 1.38462 6.58824 0 0C0 0 0 8 0 8H6Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Plus Button */}
        <button
          type="button"
          onClick={onNewTab}
          className="ml-2 w-5 h-5 hover:bg-gray-200 rounded transition-colors p-0.5"
          aria-label="New tab"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <title>New tab</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7143 10.9524H10.9524V15.7143C10.9524 16.2381 10.5238 16.6667 9.99999 16.6667C9.47618 16.6667 9.04761 16.2381 9.04761 15.7143V10.9524H4.28571C3.7619 10.9524 3.33333 10.5238 3.33333 10C3.33333 9.47619 3.7619 9.04762 4.28571 9.04762H9.04761V4.28571C9.04761 3.76191 9.47618 3.33333 9.99999 3.33333C10.5238 3.33333 10.9524 3.76191 10.9524 4.28571V9.04762H15.7143C16.2381 9.04762 16.6667 9.47619 16.6667 10C16.6667 10.5238 16.2381 10.9524 15.7143 10.9524Z"
              fill="#3C4043"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
