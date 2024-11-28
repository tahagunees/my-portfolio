import { createTheme } from '@mui/material';

export const getTheme = (mode) => createTheme({
  palette: {
    primary: {
      main: '#556cd6',
      dark: '#2a3eb1',
      light: '#768bff',
    },
    secondary: {
      main: '#19857b',
      dark: '#106e66',
      light: '#27a499',
    },
    background: {
      default: mode === 'light' ? '#f5f5f5' : '#121212',
      paper: mode === 'light' ? '#ffffff' : '#1e1e1e', // Dark modda kartların arka plan rengi
    },
    text: {
      primary: mode === 'light' ? '#000000' : '#ffffff',
      secondary: mode === 'light' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'light' ? '#ffffff' : '#242424', // Dark modda daha açık bir ton
          borderRadius: 8,
          border: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'light' ? '#ffffff' : '#242424',
          borderRadius: 8,
          border: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
        }
      }
    },
    mode,
    primary: {
      main: '#556cd6',
      dark: '#2a3eb1',
      light: '#768bff',
    },
    secondary: {
      main: '#19857b',
      dark: '#106e66',
      light: '#27a499',
    },
    background: {
      default: mode === 'light' ? '#f5f5f5' : '#121212',
      paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
    },
    text: {
      primary: mode === 'light' ? '#000000' : '#ffffff',
      secondary: mode === 'light' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(8px)',
            backgroundColor: mode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(30, 30, 30, 0.8)',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Montserrat',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
    },
    button: {
      fontFamily: 'Poppins, sans-serif',
      textTransform: 'none',
    },
    body1: {
      fontFamily: 'Poppins, sans-serif',
    },
    body2: {
      fontFamily: 'Poppins, sans-serif',
    },
  },
  
      },
    },
  },
});