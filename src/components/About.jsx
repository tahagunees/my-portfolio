import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import DevicesIcon from '@mui/icons-material/Devices';
import profileImage from '../assets/profile.jpg';

const About = () => {
  const skills = [
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: '#556cd6' }} />,
      title: 'Web Geliştirme',
      description: 'Modern web teknolojileri kullanarak responsive ve kullanıcı dostu web siteleri geliştiriyorum.'
    },
    {
      icon: <BrushIcon sx={{ fontSize: 40, color: '#556cd6' }} />,
      title: 'UI/UX Tasarım',
      description: 'Kullanıcı deneyimini ön planda tutarak modern ve şık arayüzler tasarlıyorum.'
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 40, color: '#556cd6' }} />,
      title: 'Responsive Tasarım',
      description: 'Tüm cihazlarda kusursuz çalışan uyumlu tasarımlar oluşturuyorum.'
    }
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        bgcolor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif'
          }}
        >
          Hakkımda
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: 600,
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              Ben Kimim?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 2,
                lineHeight: 1.8,
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Merhaba ben Taha ,
                Yazılım Mühedisliği Öğrencisiyim. Modern web teknolojileri konusunda sürekli kendimi geliştirmeye devam ediyorum.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              React, Material UI, TypeScript gibi modern teknolojilerle çalışmaktan keyif alıyorum. Kullanıcı deneyimini ön planda tutarak, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '400px', // Yüksekliği ayarlayabilirsiniz
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: (theme) =>
                  theme.palette.mode === 'dark'
                    ? '0 8px 32px rgba(255, 255, 255, 0.1)'
                    : '0 8px 32px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="Taha Güneş"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Fotoğrafın boyutunu korur
                  objectPosition: 'center', // Fotoğrafın merkezini gösterir
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  border: (theme) =>
                    theme.palette.mode === 'dark'
                      ? '1px solid rgba(255, 255, 255, 0.12)'
                      : 'none',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: (theme) =>
                      theme.palette.mode === 'dark'
                        ? '0 10px 20px rgba(0,0,0,0.5)'
                        : theme.shadows[10],
                  },
                }}
              >
                {skill.icon}
                <Typography
                  variant="h6"
                  sx={{
                    my: 2,
                    fontWeight: 600,
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  {skill.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {skill.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;