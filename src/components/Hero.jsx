import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      }}
    >
      <Container>
        <Typography variant="h2" color="white" gutterBottom>
          Merhaba, Ben Taha
        </Typography>
        <Typography variant="h4" color="white">
          Frontend Geliştirici
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;