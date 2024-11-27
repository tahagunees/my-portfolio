import React, { useState, useMemo, createContext } from 'react';
import { CssBaseline, ThemeProvider, Box, Container } from '@mui/material';
import { getTheme } from './components/Theme';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

function App() {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode || 'light';
  });

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('themeMode', newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            minHeight: '100vh',
            bgcolor: 'background.default',
            color: 'text.primary',
            transition: 'background-color 0.3s, color 0.3s'
          }}
        >
          <Navbar />
          <Container 
            component="main" 
            maxWidth="lg" 
            sx={{ 
              flex: 1, 
              mt: { xs: 8, sm: 12 },
              mb: { xs: 4, sm: 8 }
            }}
          >
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Container>
          <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;