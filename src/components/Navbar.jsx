import React, { useContext, useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../App';

const pages = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Blog', href: '/blog' },
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

const Navbar = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
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
      {pages.map((page) => (
        <ListItem
          key={page.name}
          component="a"
          href={page.href}
          onClick={handleDrawerToggle}
          sx={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <ListItemText primary={page.name} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <ElevationScroll {...props}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled
            ? theme.palette.mode === 'dark'
              ? 'rgba(18, 18, 18, 0.9)'
              : 'rgba(255, 255, 255, 0.9)'
            : 'transparent',
          backdropFilter: 'blur(8px)',
          color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          transition: 'all 0.3s ease-in-out',
          boxShadow: isScrolled ? 1 : 0,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Taha Güneş
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Taha Yasin
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Typography
                  key={page.name}
                  component="a"
                  href={page.href}
                  sx={{
                    mx: 2,
                    color: 'inherit',
                    display: 'block',
                    textDecoration: 'none',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {page.name}
                </Typography>
              ))}
            </Box>

            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Toolbar>
        </Container>

        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;