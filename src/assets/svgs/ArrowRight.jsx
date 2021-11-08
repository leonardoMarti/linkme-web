import React from 'react';

export const ArrowRight = ({ width = 8, height = 14 }) => {
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
        d="M1 13l5.93-5.93a.1.1 0 000-.14L1 1"
      ></path>
    </svg>
  );
};
