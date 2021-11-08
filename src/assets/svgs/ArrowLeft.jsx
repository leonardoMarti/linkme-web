import React from 'react';

export const ArrowLeft = ({ width = 8, height = 14 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 8 14"
    >
      <path
        stroke="#9FA2B4"
        strokeLinecap="round"
        strokeWidth="2"
        d="M7 13L1.07 7.07a.1.1 0 010-.14L7 1"
      ></path>
    </svg>
  );
};
