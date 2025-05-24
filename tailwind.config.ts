import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/motions/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridColumnStart: {
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
      gridColumnEnd: {
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
      gridTemplateColumns: {
        3: 'repeat(3, minmax(0, 1fr))',
        6: 'repeat(6, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))',
        13: 'repeat(13, minmax(0, 1fr))',
        14: 'repeat(14, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
      },
    },
    fontFamily: {
      inter: ['var(--inter)'],
    },
    screens: {
      xs: '0px',
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1600px',
      xxl: '1920px',
    },
    colors: {
      black: '#000000',
      white: '#ffffff',
    },
  },
  plugins: [],
};
export default config;
