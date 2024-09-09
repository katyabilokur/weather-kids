export const timeRanges = [
  {
    text: "All day",
    start: 7,
    end: 22,
  },
  {
    text: "Morning",
    start: 7,
    end: 11,
  },
  {
    text: "Day",
    start: 12,
    end: 17,
  },
  {
    text: "Evening",
    start: 18,
    end: 22,
  },
];

//------ For media queries in Styles
const breakpoints = {
  xs: "350px",
  sm: "690px", //640
  md: "870px",
};

export const devices = {
  xsPhone: `(max-width: ${breakpoints.xs})`,
  phone: `(max-width: ${breakpoints.sm})`,
  tablet: `(max-width: ${breakpoints.md})`,
};
//-----
