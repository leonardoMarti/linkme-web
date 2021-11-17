import React from 'react';

export const Close = ({ width = 15, height = 15 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 15 15"
    >
      <path
        stroke="#9FA2B4"
        strokeLinecap="round"
        strokeWidth="2"
        d="M3.544 3.527l7.054 7.088M10.615 3.544l-7.088 7.054"
      ></path>
    </svg>
  );
};
