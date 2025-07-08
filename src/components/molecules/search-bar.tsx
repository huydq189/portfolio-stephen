export function SearchBar() {
  return (
    <div className="bg-white">
      {/* Browser Search Bar */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-1.5 max-w-full">
          {/* Left Navigation Icons */}
          <div className="flex items-center gap-4">
            {/* Navigation Controls */}
            <div className="flex items-center gap-4">
              {/* Back Arrow */}
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10 12L6 8L10 4"
                    stroke="#5F6368"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Forward Arrow (disabled) */}
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors opacity-50 cursor-not-allowed">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 4L10 8L6 12"
                    stroke="#BABCBE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Close and Additional Controls */}
            <div className="flex items-center gap-4">
              {/* Close X */}
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 3L13 13M3 13L13 3"
                    stroke="#5F6368"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Home Icon */}
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.88797 0.936841C7.63413 0.683 7.22257 0.683 6.96873 0.936841L0.436841 7.46873C0.183 7.72257 0.183 8.13413 0.436841 8.38797C0.690681 8.64181 1.10224 8.64181 1.35608 8.38797L2.42383 7.32022V13.5893C2.42383 13.9483 2.71484 14.2393 3.07383 14.2393H11.783C12.142 14.2393 12.433 13.9483 12.433 13.5893V7.32036L13.5006 8.38797C13.7545 8.64181 14.166 8.64181 14.4199 8.38797C14.6737 8.13413 14.6737 7.72257 14.4199 7.46873L12.2475 5.29633C12.2443 5.29306 12.241 5.28983 12.2378 5.28663L7.88797 0.936841ZM11.133 6.02036L7.42835 2.3157L3.72383 6.02022V12.9393H11.133V6.02036Z"
                    fill="#5F6368"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Center Search Bar */}
          <div className="flex-1 max-w-4xl mx-4">
            <div className="relative">
              <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5 border border-transparent hover:border-gray-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
                {/* Security Icon */}
                <div className="flex items-center gap-1 mr-3">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <div className="w-2 h-3 relative">
                      <div className="w-1.5 h-2 border border-gray-600 rounded-sm absolute top-0 left-0.5"></div>
                      <div className="w-2 h-2 bg-gray-600 rounded-sm absolute bottom-0 left-0"></div>
                    </div>
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="text-gray-800 font-medium">
                      google.com
                    </span>
                    <span className="text-gray-500">/search</span>
                  </div>
                </div>

                {/* Search Input */}
                <input
                  type="text"
                  className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500"
                  placeholder="Search Google or type a URL"
                />

                {/* Favorite Star */}
                <button className="p-1 hover:bg-gray-200 rounded transition-colors ml-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.3621 3.84008L7.96896 3.54563L6.64395 0.425896C6.40559 -0.141965 5.59236 -0.141965 5.35399 0.425896L4.02898 3.55264L0.642846 3.84008C0.0259095 3.88915 -0.226474 4.66032 0.243239 5.06694L2.81614 7.29632L2.04497 10.6053C1.90476 11.2083 2.55675 11.685 3.08956 11.3625L5.99897 9.60983L8.90839 11.3695C9.4412 11.692 10.0932 11.2153 9.95297 10.6124L9.1818 7.29632L11.7547 5.06694C12.2244 4.66032 11.979 3.88915 11.3621 3.84008ZM5.99897 8.29884L3.36297 9.89026L4.06404 6.8897L1.73651 4.87064L4.80716 4.60424L5.99897 1.77895L7.19779 4.61125L10.2685 4.87765L7.94092 6.89672L8.64198 9.89727L5.99897 8.29884Z"
                      fill="#5F6368"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* MetaMask Logo */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <div className="w-3.5 h-3.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <g clipPath="url(#clip0_110_2317)">
                    <path
                      d="M13.3088 0.5L7.83704 4.54759L8.85726 2.16151L13.3088 0.5Z"
                      fill="#E17726"
                      stroke="#E17726"
                      strokeWidth="0.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.691249 0.5L6.11301 4.5809L5.14276 2.16568L0.691249 0.5ZM11.3391 9.88192L9.8816 12.1056L13.0006 12.9634L13.8917 9.93189L11.3391 9.88192ZM0.112427 9.93189L0.999399 12.9634L4.11004 12.1056L2.66091 9.88192L0.112427 9.93189Z"
                      fill="#E27625"
                      stroke="#E27625"
                      strokeWidth="0.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.94343 6.12574L3.07727 7.4333L6.15877 7.57488L6.05883 4.25602L3.94343 6.1299V6.12574ZM10.0565 6.1299L7.90773 4.21439L7.83694 7.57488L10.9184 7.4333L10.0565 6.1299ZM4.10999 12.1055L5.97971 11.206L4.37234 9.95679L4.10999 12.1055ZM8.02433 11.2019L9.88156 12.1055L9.63171 9.95263L8.02433 11.2019Z"
                      fill="#E27625"
                      stroke="#E27625"
                      strokeWidth="0.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.88161 12.1056L8.02438 11.2061L8.17429 12.4137L8.15764 12.9259L9.88161 12.1056ZM4.11005 12.1056L5.84235 12.9259L5.82986 12.4137L5.97977 11.2061L4.11005 12.1056Z"
                      fill="#D5BFB2"
                      stroke="#D5BFB2"
                      strokeWidth="0.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.87144 9.15318L4.33069 8.70344L5.42171 8.20374L5.8756 9.15318H5.87144ZM8.12426 9.15318L8.58232 8.19958L9.67751 8.69928L8.12426 9.15734V9.15318Z"
                      fill="#233447"
                      stroke="#233447"
                      strokeWidth="0.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.10997 12.1055L4.38064 9.88182L2.66083 9.93179L4.10997 12.1055ZM9.61919 9.88182L9.88153 12.1055L11.339 9.93179L9.61919 9.88182ZM10.9226 7.43328L7.84108 7.57486L8.12425 9.15725L8.58231 8.19949L9.67749 8.69919L10.9226 7.43328ZM4.33067 8.70336L5.42169 8.20366L5.87559 9.15309L6.16291 7.5707L3.08141 7.43328L4.33067 8.70336Z"
                      fill="#CC6228"
                      stroke="#CC6228"
                      strokeWidth="0.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.08148 7.43328L4.37238 9.95261L4.33074 8.70336L3.08148 7.43328ZM9.67756 8.70336L9.62759 9.95261L10.9185 7.43328L9.67756 8.70336ZM6.16298 7.57486L5.87149 9.15725L6.23794 11.0228L6.32122 8.56178L6.16298 7.57486ZM7.83699 7.57486L7.68707 8.55761L7.76203 11.0228L8.12431 9.15309L7.83699 7.5707V7.57486Z"
                      fill="#E27525"
                      stroke="#E27525"
                      strokeWidth="0.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.12428 9.15319L7.76199 11.0229L8.02434 11.2061L9.62755 9.95683L9.67752 8.70345L8.12428 9.15319ZM4.3307 8.70345L4.37234 9.95271L5.97972 11.202L6.2379 11.0229L5.87562 9.15319L4.32654 8.70345H4.3307Z"
                      fill="#F5841F"
                      stroke="#F5841F"
                      strokeWidth="0.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.1618 12.926L8.17429 12.4138L8.03271 12.2972H5.96727L5.82986 12.4138L5.84235 12.926L4.11005 12.1056L4.71802 12.6053L5.94645 13.4506H8.04937L9.28197 12.6011L9.88161 12.1056L8.15764 12.926H8.1618Z"
                      fill="#C0AC9D"
                      stroke="#C0AC9D"
                      strokeWidth="0.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.02436 11.2019L7.76202 11.0229H6.23792L5.97974 11.2061L5.82983 12.4137L5.96725 12.2971H8.03269L8.17427 12.4137L8.02436 11.2061V11.2019Z"
                      fill="#161616"
                      stroke="#161616"
                      strokeWidth="0.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.5419 4.80994L14 2.58209L13.3087 0.5L8.02023 4.41434L10.0565 6.12582L12.9298 6.96282L13.5628 6.22576L13.2879 6.02588L13.7252 5.62612L13.392 5.36794L13.8293 5.0348L13.5378 4.80994H13.5419ZM0 2.57793L0.466389 4.80994L0.166568 5.03064L0.612136 5.36377L0.279001 5.62612L0.712076 6.02588L0.43724 6.22576L1.0702 6.96282L3.94349 6.12998L5.97977 4.41017L0.691255 0.5L0 2.57793Z"
                      fill="#763E1A"
                      stroke="#763E1A"
                      strokeWidth="0.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.9298 6.96277L10.0565 6.12993L10.9227 7.43332L9.63175 9.95265L11.3391 9.93183H13.8917L12.9298 6.96277ZM3.94347 6.12576L1.07019 6.96277L0.112427 9.93183H2.66507L4.37238 9.95265L3.08149 7.43332L3.94764 6.12576H3.94347ZM7.83699 7.5749L8.02438 4.41012L8.85721 2.16145H5.14276L5.9756 4.41012L6.16298 7.5749L6.23378 8.56598V11.0229H7.76203L7.77036 8.56598L7.83699 7.5749Z"
                      fill="#F5841F"
                      stroke="#F5841F"
                      strokeWidth="0.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_110_2317">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </button>

            {/* Extensions Menu Icon */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <div className="w-4 h-4 relative">
                <div className="w-1 h-1.5 bg-gray-400 rounded-full absolute top-0 left-1.5"></div>
                <div className="w-4 h-3 bg-gray-400 rounded-sm absolute bottom-0 left-0 opacity-70"></div>
                <div className="w-1 h-1.5 bg-gray-400 rounded-full absolute bottom-1 right-0"></div>
                <div className="w-1 h-1.5 bg-gray-400 rounded-full absolute bottom-1 left-1"></div>
              </div>
            </button>

            {/* User Menu Icon */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
            </button>

            {/* User Profile */}
            <button className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 hover:ring-2 hover:ring-blue-300 transition-all overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-pink-500"></div>
            </button>

            {/* More Options Menu */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <div className="flex flex-col items-center justify-center gap-0.5">
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
