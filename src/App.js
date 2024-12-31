import React, { useState, createContext, useMemo, useEffect } from 'react';
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import References from './components/References';
import BlogList from './components/Blog/BlogList';
import BlogPost from './components/Blog/BlogPost';
import BlogAdmin from './components/Admin/BlogAdmin';
import Login from './components/Admin/Login';

// Theme context
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // Light mode
                primary: {
                  main: '#1976d2',
                },
                secondary: {
                  main: '#dc004e',
                },
                background: {
                  default: '#fff',
                  paper: '#fff',
                },
              }
            : {
                // Dark mode
                primary: {
                  main: '#90caf9',
                },
                secondary: {
                  main: '#f48fb1',
                },
                background: {
                  default: '#121212',
                  paper: '#1e1e1e',
                },
              }),
        },
        typography: {
          fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <ScrollToTop />
          <Box
            sx={{
              bgcolor: 'background.default',
              color: 'text.primary',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <AnimatePresence mode="wait">
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <About />
                      <Skills />
                      <Experience />
                      <Projects />
                      <Certificates />
                      <References />
                      <Contact />
                    </>
                  }
                />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin/blog" element={<BlogAdmin />} />
              </Routes>
              <Footer />
            </AnimatePresence>
          </Box>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;