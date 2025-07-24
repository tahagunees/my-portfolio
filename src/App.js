import React, { useState, useMemo, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from './components/Theme';

// Ana bileşenler
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Color Mode Context
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

function AppContent() {
  const { colorMode, toggleColorMode } = useContext(ColorModeContext);
  const theme = useMemo(() => getTheme(colorMode), [colorMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

function App() {
  const [colorMode, setColorMode] = useState('light');

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      <AppContent />
    </ColorModeContext.Provider>
  );
}

export default App;