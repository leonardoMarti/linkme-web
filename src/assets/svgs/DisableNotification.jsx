import React from 'react';

export const DisableNotification = ({ width = 15, height = 16 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 15 16"
    >
      <path
        fill="#C5C7CD"
        d="M8 16a2 2 0 002-2H6A2 2 0 008 16zm6.731-4.678c-.604-.65-1.733-1.625-1.733-4.822 0-2.428-1.703-4.372-3.999-4.849V1a1 1 0 10-1.998 0v.651c-2.296.477-3.998 2.42-3.998 4.849 0 3.197-1.13 4.173-1.734 4.822A.976.976 0 001 12a1 1 0 001.003 1h11.994A1 1 0 0015 12a.975.975 0 00-.269-.678z"
      ></path>
      <path
        stroke="#000"
        strokeOpacity="0.27"
        strokeWidth="2"
        d="M13.646 2.763L0.646 13.763"
      ></path>
    </svg>
  );
};
