import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  palette: {
    text: {
      primary: '#fff',
    },
    background: {
      default: '#1d1d2a',
    },
  },
});
