import React, { useState, useMemo, createContext } from 'react';
import { CssBaseline, ThemeProvider, Box, Container } from '@mui/material';
import { getTheme } from './components/Theme';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import References from './components/References';
import GitHubStats from './components/GitHubStats';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                minHeight: '100vh',
                bgcolor: 'background.default',
                color: 'text.primary',
                transition: 'background-color 0.5s, color 0.5s'
              }}
            >
              <Navbar />
              <Container 
                component={motion.main}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                maxWidth="lg" 
                sx={{ 
                  flex: 1, 
                  mt: { xs: 8, sm: 12 },
                  mb: { xs: 4, sm: 8 }
                }}
              >
                <About />
                <Skills />
                <Experience />
                <Certificates />
                <Projects />
                <References />
                <Contact />
              </Container>
              <Footer />
            </Box>
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


export default App;