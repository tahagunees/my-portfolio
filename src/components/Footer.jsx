import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/tahagunees' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/taha-g%C3%BCne%C5%9F-32a191253/' },
    { icon: <TwitterIcon />, url: 'https://twitter.com/tahagnes' },
    { icon: <EmailIcon />, url: 'tahagnes@hotmail.com' }
  ];

  const footerLinks = [
    { text: 'Anasayfa', href: '#' },
    { text: 'Hakkımda', href: '#about' },
    { text: 'Yetenekler', href: '#skills' },
    { text: 'Projeler', href: '#projects' },
    { text: 'İletişim', href: '#contact' }
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
              Taha Güneş
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Full Stack Developer olarak modern web teknolojileri ile kullanıcı dostu uygulamalar geliştiriyorum.
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
              Hızlı Bağlantılar
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
              İletişim
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Samsun, Türkiye
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Email: tahagnes@hotmail.com
            </Typography>
            
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid', borderColor: 'divider' , fontFamily: 'Poppins, sans-serif'}}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {currentYear} TAHA GÜNEŞ. Tüm hakları saklıdır.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;