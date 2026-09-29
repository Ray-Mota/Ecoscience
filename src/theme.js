import { createTheme } from '@mui/material/styles';

// Identidade Ecoscience: verde-petróleo profundo (evolução do teal original do site)
// + âmbar terroso como cor de ação. Fundo com leve matiz esverdeada em vez do
// bege/creme genérico, para não cair no clichê "IA cream + terracota".
export const palette = {
  primary: {
    main: '#0B5D52',
    dark: '#063D37',
    light: '#3B8177',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#E2A33D',
    dark: '#B97F22',
    light: '#EDBB6A',
    contrastText: '#1C2620',
  },
  background: {
    default: '#F3F6F2',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#16211C',
    secondary: '#516058',
  },
  divider: '#D9E0D6',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    ...palette,
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: '"Work Sans", "Helvetica Neue", Arial, sans-serif',
    h1: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600, letterSpacing: '-0.01em' },
    h2: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600, letterSpacing: '-0.01em' },
    h3: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600 },
    h4: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600 },
    h5: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600 },
    h6: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600 },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.65 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999, paddingLeft: 22, paddingRight: 22 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid #D9E0D6',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
  },
});

export default theme;
