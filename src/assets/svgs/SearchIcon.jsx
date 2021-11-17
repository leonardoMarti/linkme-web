import React from 'react';

export const SearchIcon = ({ width = 16, height = 16 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
    >
      <circle
        cx="6.5"
        cy="6.5"
        r="5.75"
        stroke="#9FA2B4"
        strokeWidth="1.5"
      ></circle>
      <path
        stroke="#9FA2B4"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M11 11l4 4"
      ></path>
    </svg>
  );
};
