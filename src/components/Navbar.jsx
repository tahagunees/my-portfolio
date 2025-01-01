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
import { ColorModeContext } from '../theme';

const navItems = [
  { name: 'Ana Sayfa', href: '/#home' },
  { name: 'Projeler', href: '/#projects' },
  { name: 'Blog', href: '/#blog' },
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
    <List>
      {navItems.map((item) => (
        <ListItem 
          key={item.name} 
          component={HashLink} 
          to={item.href}
          data-testid={`mobile-nav-${item.name.toLowerCase().replace(' ', '-')}`}
          onClick={handleDrawerToggle}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
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
                  fontFamily: 'Pacifico, cursive',
                  color: 'text.primary',
                }}
              >
                Taha Güneş
              </Typography>

              <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
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
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button
                  data-testid="theme-toggle"
                  onClick={colorMode.toggleColorMode}
                  color="inherit"
                  sx={{ ml: 1 }}
                >
                  {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </Button>

                <Box sx={{ display: { sm: 'none' } }}>
                  <Button
                    data-testid="mobile-menu-toggle"
                    onClick={handleDrawerToggle}
                    color="inherit"
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