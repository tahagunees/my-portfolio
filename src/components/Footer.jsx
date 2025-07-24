import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/cagrisahin' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/cagrisahin' },
    { icon: <EmailIcon />, url: 'mailto:cagri.sahin@email.com' }
  ];

  const footerLinks = [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#about' },
    { text: 'Skills', href: '#skills' },
    { text: 'Projects', href: '#projects' },
    { text: 'Contact', href: '#contact' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Ömer Güneş
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Game Developer specializing in Unity and C# for mobile and PC games. 4+ years of experience with various SDKs including Nakama, Azure PlayFab, and Photon Network.
            </Typography>
            <Box sx={{ mt: 2 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mr: 1,
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 , fontFamily: 'Poppins, sans-serif'}}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  color="text.secondary"
                  sx={{
                    mb: 1,
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 , fontFamily: 'Poppins, sans-serif'}}>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Istanbul, Turkey
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Email: cagri.sahin@email.com
            </Typography>
            
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid', borderColor: 'divider' , fontFamily: 'Poppins, sans-serif'}}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {currentYear} ÖMER GÜNEŞ. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;