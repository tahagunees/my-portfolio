import React, { useState, useMemo, Suspense, lazy } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ColorModeContext } from './theme';
import LinearProgress from '@mui/material/LinearProgress';

// Lazy load components
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Certificates = lazy(() => import('./components/Certificates'));
const References = lazy(() => import('./components/References'));
const Contact = lazy(() => import('./components/Contact'));
const Blog = lazy(() => import('./components/Blog/BlogList'));
const BlogPost = lazy(() => import('./components/Blog/BlogPost'));
const Login = lazy(() => import('./components/Admin/Login'));
const BlogAdmin = lazy(() => import('./components/Admin/BlogAdmin'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [mode, setMode] = useState('dark');

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
          primary: {
            main: mode === 'dark' ? '#90caf9' : '#1976d2',
          },
          background: {
            default: mode === 'dark' ? '#121212' : '#ffffff',
            paper: mode === 'dark' ? '#1e1e1e' : '#f5f5f5',
          },
        },
        typography: {
          fontFamily: ['Poppins', 'Roboto', 'Arial', 'sans-serif'].join(','),
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: `
              body {
                scrollbar-width: thin;
                scrollbar-color: ${mode === 'dark' ? '#6b6b6b #2b2b2b' : '#d1d1d1 #f1f1f1'};
              }
              ::-webkit-scrollbar {
                width: 8px;
              }
              ::-webkit-scrollbar-track {
                background: ${mode === 'dark' ? '#2b2b2b' : '#f1f1f1'};
              }
              ::-webkit-scrollbar-thumb {
                background-color: ${mode === 'dark' ? '#6b6b6b' : '#d1d1d1'};
                border-radius: 20px;
              }
            `,
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Suspense fallback={<LinearProgress />}>
            <Navbar />
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <div data-testid="hero-section" id="home">
                      <Hero />
                    </div>
                    <div data-testid="about-section" id="about">
                      <About />
                    </div>
                    <div data-testid="skills-section" id="skills">
                      <Skills />
                    </div>
                    <div data-testid="experience-section" id="experience">
                      <Experience />
                    </div>
                    <div data-testid="projects-section" id="projects">
                      <Projects />
                    </div>
                    <div data-testid="certificates-section" id="certificates">
                      <Certificates />
                    </div>
                    <div data-testid="references-section" id="references">
                      <References />
                    </div>
                    <div data-testid="contact-section" id="contact">
                      <Contact />
                    </div>
                    <div data-testid="blog-section" id="blog">
                      <Blog />
                    </div>
                  </>
                } 
              />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin/blog" element={<BlogAdmin />} />
            </Routes>
            <Footer />
          </Suspense>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;