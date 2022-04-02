import { defineConfig } from 'windicss/helpers';

export default defineConfig({
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
