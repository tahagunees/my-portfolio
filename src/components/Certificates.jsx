import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Link } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';

const Certificates = () => {
  // Sertifika verilerini burada tanımlayalım
  const certificates = [
    {
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2024",
      image: "/path-to-certificate-image.jpg", // Sertifika görselinin yolunu ekleyin
      verificationLink: "https://www.udemy.com/certificate/...", // Doğrulama linkini ekleyin
      skills: ["React", "Redux", "Hooks"]
    },
    {
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2024",
      image: "/path-to-certificate-image.jpg", // Sertifika görselinin yolunu ekleyin
      verificationLink: "https://www.udemy.com/certificate/...", // Doğrulama linkini ekleyin
      skills: ["React", "Redux", "Hooks"]
    },
    
    // Diğer sertifikalarınızı buraya ekleyebilirsiniz
  ];

  return (
    <Box
      id="certificates"
      sx={{
        py: 8,
        bgcolor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            Sertifikalarım
          </Typography>

          <Grid container spacing={4}>
            {certificates.map((cert, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: (theme) =>
                        theme.palette.mode === 'dark'
                          ? '0 8px 32px rgba(255, 255, 255, 0.1)'
                          : '0 8px 32px rgba(0, 0, 0, 0.1)',
                      '&:hover': {
                        boxShadow: (theme) =>
                          theme.palette.mode === 'dark'
                            ? '0 10px 40px rgba(255, 255, 255, 0.2)'
                            : '0 10px 40px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={cert.image}
                      alt={cert.title}
                      sx={{
                        objectFit: 'cover',
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            fontFamily: 'Montserrat, sans-serif',
                            mr: 1
                          }}
                        >
                          {cert.title}
                        </Typography>
                        <VerifiedIcon color="primary" />
                      </Box>
                      
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: 'text.secondary',
                          mb: 1,
                          fontFamily: 'Poppins, sans-serif'
                        }}
                      >
                        {cert.issuer} • {cert.date}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {cert.skills.map((skill, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              px: 1.5,
                              py: 0.5,
                              bgcolor: 'primary.main',
                              color: 'white',
                              borderRadius: '15px',
                              fontSize: '0.75rem',
                              fontWeight: 500
                            }}
                          >
                            {skill}
                          </Box>
                        ))}
                      </Box>

                      <Link
                        href={cert.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          color: 'primary.main',
                          textDecoration: 'none',
                          '&:hover': {
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Sertifikayı Doğrula
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Certificates;