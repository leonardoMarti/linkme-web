import React from 'react';

export const SortIcon = ({ width = 16, height = 16 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#C5C7CD"
        d="M1.129 4.268l2.187-2.143a.444.444 0 01.618 0l2.187 2.143c.276.27.08.732-.31.732H4.501v8.571a.433.433 0 01-.438.429h-.875a.433.433 0 01-.437-.429V5H1.438c-.39 0-.584-.462-.31-.732zm6.434-.554h7A.433.433 0 0015 3.286v-.857A.433.433 0 0014.562 2h-7a.433.433 0 00-.437.429v.857c0 .236.196.428.438.428zm-.438 3v-.857c0-.237.196-.428.438-.428h5.25c.241 0 .437.191.437.428v.857a.433.433 0 01-.438.429h-5.25a.433.433 0 01-.437-.429zm0 6.857v-.857c0-.236.196-.428.438-.428h1.75c.241 0 .437.192.437.428v.857a.433.433 0 01-.438.429h-1.75a.433.433 0 01-.437-.429zm0-3.428v-.857c0-.237.196-.429.438-.429h3.5c.241 0 .437.192.437.429v.857a.433.433 0 01-.438.428h-3.5a.433.433 0 01-.437-.428z"
      ></path>
    </svg>
  );
};