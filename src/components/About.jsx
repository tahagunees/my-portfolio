import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import DevicesIcon from '@mui/icons-material/Devices';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: '#556cd6' }} />,
      title: 'Game Development',
      description: 'Developing engaging mobile games using Unity and C# with focus on gameplay mechanics and user experience optimization.'
    },
    {
      icon: <BrushIcon sx={{ fontSize: 40, color: '#556cd6' }} />,
      title: 'Game Design',
      description: 'Creating immersive gaming experiences with attention to game graphics, level design, and overall player engagement.'
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 40, color: '#556cd6' }} />,
      title: 'Multiplayer Systems',
      description: 'Implementing real-time multiplayer capabilities using Photon Network and backend management with Azure PlayFab.'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };



  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Box
        id="about"
        sx={{
          py: 8,
          bgcolor: 'background.default'
        }}
      >
        <Container maxWidth="lg">
          <motion.div variants={textVariants}>
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                mb: 6,
                fontWeight: 700,
                fontSize: '3.2rem',
                fontFamily: 'Pacifico, cursive',
                background: 'linear-gradient(45deg, #1976d2 30%, #64b5f6 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              About Me
            </Typography>
          </motion.div>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <motion.div variants={textVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  Who Am I?
                </Typography>
              </motion.div>
              
              <motion.div variants={textVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 2,
                    lineHeight: 1.8,
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  Hello, I'm Çağrı Şahin, a passionate Game Developer with over 4 years of experience in developing 
                  engaging mobile games. Currently working as Game Developer at Unico Studio, focusing on puzzle games.
                </Typography>
              </motion.div>
              
              <motion.div variants={textVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  Proficient in Unity and C#, I specialize in creating immersive gaming experiences for mobile platforms. 
                  My expertise includes working with Azure PlayFab for backend management, Photon Network for multiplayer 
                  capabilities, and collaborating with design teams to enhance game graphics and user experience.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  custom={index}
                >
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
                        boxShadow: (theme) =>
                          theme.palette.mode === 'dark'
                            ? '0 10px 20px rgba(0,0,0,0.5)'
                            : theme.shadows[10],
                      },
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {skill.icon}
                    </motion.div>
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
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </motion.section>
  );
};

export default About;