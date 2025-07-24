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
      description: 'Developing mobile and PC games using Unity and Unreal Engine with focus on interactive experiences.'
    },
    {
      icon: <BrushIcon sx={{ fontSize: 40, color: '#556cd6' }} />,
      title: 'Level Design',
      description: 'Creating engaging and fun levels that provide immersive gaming experiences for players.'
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 40, color: '#556cd6' }} />,
      title: 'Team Collaboration',
      description: 'Working effectively with multidisciplinary teams to develop successful gaming projects.'
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

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -15 
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
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
                  Hello, I'm Ömer Güneş, a passionate Game Developer with over 4 years of experience in developing 
                  interactive and engaging mobile games. Currently working as Game Developer at Unico Studio.
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
                  Proficient in Unity and C#, I focus on creating seamless and immersive gaming experiences. 
                  My goal is to continuously enhance my skills and stay updated with the latest trends in the gaming industry. 
                  Experienced with various SDKs like Nakama, Azure PlayFab, and Photon Network.
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