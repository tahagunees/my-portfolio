import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { 
  FaGamepad, FaCogs, FaUnity, FaCode, FaGitAlt, FaWindows, FaNetworkWired 
} from 'react-icons/fa';
import { 
  SiCsharp, SiUnrealengine, SiVisualstudio, SiBlender, SiAutodesk, SiMicrosoftazure 
} from 'react-icons/si';

const Skills = () => {
  const technologies = [
    { name: 'Unity', icon: <FaUnity size={40} />, color: '#000000' },
    { name: 'C#', icon: <SiCsharp size={40} />, color: '#239120' },
    { name: 'Unreal Engine', icon: <SiUnrealengine size={40} />, color: '#0E1128' },
    { name: 'Visual Studio', icon: <SiVisualstudio size={40} />, color: '#5C2D91' },
    { name: 'Game Design', icon: <FaGamepad size={40} />, color: '#FF6B35' },
    { name: 'Level Design', icon: <FaCogs size={40} />, color: '#6C757D' },
    { name: 'Azure PlayFab', icon: <SiMicrosoftazure size={40} />, color: '#0078D4' },
    { name: 'Photon Network', icon: <FaNetworkWired size={40} />, color: '#00D4AA' },
    { name: 'Nakama SDK', icon: <FaCode size={40} />, color: '#28A745' },
    { name: 'Blender', icon: <SiBlender size={40} />, color: '#F5792A' },
    { name: 'Maya', icon: <SiAutodesk size={40} />, color: '#0696D7' },
    { name: 'Git', icon: <FaGitAlt size={40} />, color: '#F05032' },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
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
      scale: 0.8,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -15,
      scale: 1.05,
      rotateY: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.3,
      rotate: 360,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Box id="skills" sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <motion.div variants={titleVariants}>
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                mb: 6,
                fontWeight: 700,
                fontFamily: 'Pacifico, cursive',
                background: 'linear-gradient(45deg, #1976d2 30%, #64b5f6 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Game Development Technologies
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {technologies.map((tech, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
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
                      borderRadius: 3,
                      bgcolor: 'background.paper',
                      border: (theme) =>
                        theme.palette.mode === 'dark'
                          ? '1px solid rgba(255, 255, 255, 0.12)'
                          : '1px solid rgba(0, 0, 0, 0.08)',
                      background: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'linear-gradient(145deg, rgba(30, 30, 30, 0.8), rgba(50, 50, 50, 0.4))'
                          : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.6))',
                      backdropFilter: 'blur(10px)',
                      '&:hover': {
                        boxShadow: (theme) =>
                          theme.palette.mode === 'dark'
                            ? '0 20px 40px rgba(0,0,0,0.7)'
                            : '0 20px 40px rgba(25, 118, 210, 0.15)',
                      },
                    }}
                  >
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      style={{
                        color: tech.color,
                        marginBottom: 16,
                        display: 'inline-block'
                      }}
                    >
                      {tech.icon}
                    </motion.div>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: '1rem',
                        fontFamily: 'Montserrat, sans-serif',
                        background: 'linear-gradient(45deg, #1976d2 30%, #64b5f6 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {tech.name}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Skills;