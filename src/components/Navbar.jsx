import React, { useState, useEffect, useContext } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  useMediaQuery,
  useScrollTrigger,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { HashLink } from 'react-router-hash-link';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../App';

const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Navbar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const colorMode = useContext(ColorModeContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          mb: 3,
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700,
          background: 'linear-gradient(45deg, #1976d2 30%, #64b5f6 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        Ömer Güneş
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.name} 
            component={HashLink} 
            to={item.href}
            data-testid={`mobile-nav-${item.name.toLowerCase().replace(' ', '-')}`}
            onClick={handleDrawerToggle}
            sx={{ 
              textDecoration: 'none', 
              color: 'inherit',
              borderRadius: 2,
              mb: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'primary.light',
                color: 'white',
                transform: 'translateX(10px)',
              }
            }}
          >
            <ListItemText 
              primary={item.name}
              primaryTypographyProps={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '1.1rem'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <ElevationScroll {...props}>
        <AppBar 
          position="fixed" 
          color="default" 
          sx={{ 
            backgroundColor: isScrolled ? 'background.paper' : 'transparent',
            transition: 'background-color 0.3s ease',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                data-testid="navbar-title"
                sx={{
                  flexGrow: 1,
                  display: { xs: matches ? 'none' : 'block', sm: 'block' },
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: 'text.primary',
                  background: 'linear-gradient(45deg, #1976d2 30%, #64b5f6 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  }
                }}
              >
                Ömer Güneş
              </Typography>

              <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    component={HashLink}
                    to={item.href}
                    smooth
                    data-testid={`nav-${item.name.toLowerCase().replace(' ', '-')}`}
                    sx={{
                      color: 'text.primary',
                      textTransform: 'none',
                      mx: 1,
                      px: 2.5,
                      py: 1,
                      borderRadius: 3,
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(45deg, #1976d2 30%, #64b5f6 90%)',
                        transition: 'left 0.3s ease',
                        zIndex: -1,
                      },
                      '&:hover': {
                        color: 'white',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
                        '&:before': {
                          left: 0,
                        },
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button
                  data-testid="theme-toggle"
                  onClick={colorMode.toggleColorMode}
                  color="inherit"
                  sx={{ 
                    ml: 1,
                    minWidth: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #1976d2 30%, #64b5f6 90%)',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1) rotate(180deg)',
                      boxShadow: '0 4px 12px rgba(25, 118, 210, 0.4)',
                    }
                  }}
                >
                  {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </Button>

                <Box sx={{ display: { sm: 'none' } }}>
                  <Button
                    data-testid="mobile-menu-toggle"
                    onClick={handleDrawerToggle}
                    color="inherit"
                    sx={{
                      minWidth: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #1976d2 30%, #64b5f6 90%)',
                      color: 'white',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: '0 4px 12px rgba(25, 118, 210, 0.4)',
                      }
                    }}
                  >
                    <MenuIcon />
                  </Button>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}