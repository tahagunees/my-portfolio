import React from 'react';
import { Box, Typography, Container, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadIcon from '@mui/icons-material/Download';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.2
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const chipVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 1.5
      }
    }
  };

  return (
    <Box
      id="home"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0d1421 0%, #1a1a2e 50%, #16213e 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center, rgba(139, 69, 19, 0.1) 0%, transparent 70%)',
          zIndex: 1
        }
      }}
    >
      {/* Floating particles animation */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(100, 181, 246, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 1
        }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        style={{
          position: 'absolute',
          bottom: '30%',
          left: '5%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(139, 69, 19, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 1
        }}
        animate={{
          y: [0, 15, 0],
          scale: [1, 0.9, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={chipVariants}>
            <Chip
              label="Available for freelance"
              sx={{
                mb: 3,
                backgroundColor: 'rgba(100, 181, 246, 0.1)',
                color: '#64b5f6',
                border: '1px solid rgba(100, 181, 246, 0.3)',
                fontWeight: 500
              }}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography 
              variant="h2" 
              sx={{ 
                color: '#ffffff',
                fontWeight: 700,
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(45deg, #ffffff 30%, #64b5f6 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Hello, I'm Ömer Güneş
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography 
              variant="h4" 
              sx={{ 
                color: '#64b5f6',
                fontWeight: 500,
                mb: 2,
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              Game Developer
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 300,
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                fontSize: { xs: '1rem', md: '1.25rem' },
                mb: 4
              }}
            >
              Unity & C# | 4+ years of experience | Based in Istanbul
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                variant="contained"
                size="large"
                startIcon={<PlayArrowIcon />}
                sx={{
                  background: 'linear-gradient(45deg, #64b5f6 30%, #1976d2 90%)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 20px rgba(100, 181, 246, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 25px rgba(100, 181, 246, 0.4)',
                  }
                }}
              >
                View My Work
              </Button>
            </motion.div>

            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                variant="outlined"
                size="large"
                startIcon={<DownloadIcon />}
                sx={{
                  color: '#64b5f6',
                  borderColor: '#64b5f6',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  backgroundColor: 'rgba(100, 181, 246, 0.05)',
                  '&:hover': {
                    backgroundColor: 'rgba(100, 181, 246, 0.1)',
                    borderColor: '#64b5f6',
                  }
                }}
              >
                Download CV
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;