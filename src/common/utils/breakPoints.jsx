const BREAKPOINTS = {
  XS: 0,
  SM: 600,
  MD: 960,
  LG: 1280,
  LG1440: 1441,
  XL: 1920,
};

export const MEDIA_QUERIES = {
  xsUp: `@media (min-width: ${BREAKPOINTS.XS}px)`,
  smUp: `@media (min-width: ${BREAKPOINTS.SM}px)`,
  mdUp: `@media (min-width: ${BREAKPOINTS.MD}px)`,
  lgUp: `@media (min-width: ${BREAKPOINTS.LG}px)`,
  lg1440Up: `@media (min-width: ${BREAKPOINTS.LG1440}px)`,
  xlUp: `@media (min-width: ${BREAKPOINTS.XL}px)`,
  customUp: (size) => `@media (min-width: ${size}px)`,

  xsDown: `@media (max-width: ${BREAKPOINTS.SM - 1}px)`,
  smDown: `@media (max-width: ${BREAKPOINTS.MD - 1}px)`,
  mdDown: `@media (max-width: ${BREAKPOINTS.LG - 1}px)`,
  lgDown: `@media (max-width: ${BREAKPOINTS.LG1440 - 1}px)`,
  lg1440Down: `@media (max-width: ${BREAKPOINTS.XL - 1}px)`,
  customDown: (size) => `@media (max-width: ${size}px)`,
  desktopDown: `@media (max-width: ${BREAKPOINTS.LG1440 - 1}px)`,
};
