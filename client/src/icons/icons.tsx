import React from "react";

export const HomeIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    {/* محتوای SVG برای آیکون خانه */}
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

export const TaskIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    {/* محتوای SVG برای آیکون وظایف */}
    <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-3h5v2h-5v-2zm0-4h5v2h-5v-2zm-6 0h2v2H5v-2zm0 4h2v2H5v-2zm0-8h14v2H5V7z" />
  </svg>
);

export const FriendsIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    {/* محتوای SVG برای آیکون دوستان */}
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

export const LeaderboardIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    {/* محتوای SVG برای آیکون لیدربورد */}
    <path d="M7 17v5H3v-5h4zm7-10v15h-4V7h4zm7 5v10h-4V12h4z" />
  </svg>
);
