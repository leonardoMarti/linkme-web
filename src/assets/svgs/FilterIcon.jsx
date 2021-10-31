import React from 'react';

export const FilterIcon = ({ width = 12, height = 12 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        fill="#C5C7CD"
        d="M11.437 0H.563c-.5 0-.752.606-.398.96L4.5 5.295v4.83c0 .184.09.355.24.46l1.875 1.313a.563.563 0 00.885-.461V5.295L11.835.96a.563.563 0 00-.398-.96z"
      ></path>
    </svg>
  );
};
