import React from 'react';

export const UserIcon = ({ width = 16, height = 16 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#9FA2B4"
        d="M8 8a4 4 0 100-8 4 4 0 000 8zm2.994 1.019L9.5 15l-1-4.25L9.5 9h-3l1 1.75-1 4.25-1.494-5.981C2.778 9.125 1 10.947 1 13.2v1.3A1.5 1.5 0 002.5 16h11a1.5 1.5 0 001.5-1.5v-1.3c0-2.253-1.778-4.075-4.006-4.181z"
        opacity="0.4"
      ></path>
    </svg>
  );
};
