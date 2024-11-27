import React, { useContext, useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  useTheme,
  Box,
  Container,
  useScrollTrigger,
  Slide,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { ColorModeContext } from '../App';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { text: 'Hakkımda', href: '#about' },
    { text: 'Yetenekler', href: '#skills' },
    { text: 'Projeler', href: '#projects' },
    { text: 'İletişim', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem 
          button 
          key={item.text} 
          component="a" 
          href={item.href}
          onClick={handleDrawerToggle}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          elevation={0}
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.8)', // Her zaman açık renk arka plan
            backdropFilter: 'blur(8px)',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  flexGrow: 1,
                  fontWeight: 700,
                  color: '#000000'  // Her zaman siyah
                }}
              >
                TAHA GÜNEŞ
              </Typography>
              
              {isMobile ? (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton
                    sx={{ color: '#000000' }}  // Her zaman siyah
                    aria-label="toggle theme"
                    onClick={colorMode.toggleColorMode}
                    edge="end"
                  >
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                  <IconButton
                    sx={{ color: '#000000' }}  // Her zaman siyah
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              ) : (
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  {navItems.map((item) => (
                    <Button 
                      key={item.text}
                      href={item.href}
                      sx={{
                        color: '#000000',  // Her zaman siyah
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {item.text}
                    </Button>
                  ))}
                  <IconButton
                    sx={{ color: '#000000' }}  // Her zaman siyah
                    aria-label="toggle theme"
                    onClick={colorMode.toggleColorMode}
                    edge="end"
                  >
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            bgcolor: 'background.paper',
            color: 'text.primary'  // Tema rengini kullan
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;