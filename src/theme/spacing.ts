const theme = {
  0: 0,
  1: 1,
  2: 2,
  4: 4,
  8: 8,
  12: 12,
  14: 14,
  16: 16,
  24: 24,
  32: 32,
  40: 40,
  48: 48,
  56: 56,
  64: 64,
  72: 72,
  80: 80,
} as const;

const spacing = {
  unit: 12,

  xs: theme[4],
  sm: theme[8],
  md: theme[16],
  lg: theme[24],
  xl: theme[32],
  xxl: theme[40],

  padding: {
    xs: theme[4],
    sm: theme[8],
    md: theme[16],
    lg: theme[24],
    xl: theme[32],
  },

  margin: {
    xs: theme[4],
    sm: theme[8],
    md: theme[16],
    lg: theme[24],
    xl: theme[32],
  },

  gap: {
    xs: theme[4],
    sm: theme[8],
    md: theme[12],
  },

  radius: {
    xs: theme[8],
    sm: theme[12],
    md: theme[32],
    lg: theme[40],
    rounded: 9999,
  }
} as const;

export { theme, spacing };
