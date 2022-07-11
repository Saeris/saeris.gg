export const theme = {
  colors: {
    /** This should be used for all header text */
    primary: `#bada55`
  }
} as const;

export type Theme = typeof theme;
