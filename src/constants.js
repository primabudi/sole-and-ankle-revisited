export const COLORS = {
  white: '0deg 0% 100%',
  gray: {
    100: '185deg 5% 95%',
    300: '190deg 5% 80%',
    500: '196deg 4% 60%',
    700: '220deg 5% 40%',
    900: '220deg 3% 20%',
  },
  primary: '340deg 65% 47%',
  secondary: '240deg 60% 63%',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  phone: '37.5rem',
  tablet: '59.375rem',
  laptop: '81.25rem'
}

export const QUERIES = {
  'laptopAndDown': `(max-width: ${BREAKPOINTS.laptop})`,
  'tabletAndDown': `(max-width: ${BREAKPOINTS.tablet})`,
  'phoneAndDown': `(max-width: ${BREAKPOINTS.phone})`,
}
