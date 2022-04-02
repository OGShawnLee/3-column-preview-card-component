import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  safelist: [
    'bg-orange',
    'text-orange',
    'bg-cyan-600',
    'text-cyan-600',
    'bg-cyan-700',
    'text-cyan-700',
  ],
  theme: {
    colors: {
      cyan: {
        600: 'hsl(184, 100%, 22%)',
        700: 'hsl(179, 100%, 13%)',
      },
      orange: 'hsl(31, 77%, 52%)',
      transparent: 'transparent',
      white: '#FFFFFF',
    },
    fontFamily: {
      lexend: ['Lexend Deca', 'sans-serif'],
      shoulders: ['Big Shoulders Display'],
    },
  },
});
