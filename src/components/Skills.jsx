import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import GitHubStats from './GitHubStats';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaFigma, FaNpm, FaJava 
} from 'react-icons/fa';
import { 
  SiTypescript, SiMui, SiTailwindcss, SiUbuntu, SiNextdotjs, 
  SiDocker, SiSpring, SiPostgresql 
} from 'react-icons/si';

const Skills = () => {
  const technologies = [
    { name: 'React', icon: <FaReact size={40} />, color: '#61DAFB' },
    { name: 'Next.js', icon: <SiNextdotjs size={40} />, color: '#000000' },
    { name: 'TypeScript', icon: <SiTypescript size={40} />, color: '#3178C6' },
    { name: 'JavaScript', icon: <FaJs size={40} />, color: '#F7DF1E' },
    { name: 'HTML5', icon: <FaHtml5 size={40} />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt size={40} />, color: '#1572B6' },
    { name: 'Material UI', icon: <SiMui size={40} />, color: '#007FFF' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} />, color: '#06B6D4' },
    { name: 'Ubuntu', icon: <SiUbuntu size={40} />, color: '#764ABC' },
    { name: 'Java', icon: <FaJava size={40} />, color: '#339933' },
    { name: 'Spring', icon: <SiSpring size={40} />, color: '#000000' },
    { name: 'Docker', icon: <SiDocker size={40} />, color: '#47A248' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={40} />, color: '#4169E1' },
    { name: 'Git', icon: <FaGitAlt size={40} />, color: '#F05032' },
    { name: 'Figma', icon: <FaFigma size={40} />, color: '#181717' },
    { name: 'NPM', icon: <FaNpm size={40} />, color: '#CB3837' },
  ];

  return (
    <Box id="skills" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
            fontFamily: 'Pacifico, cursive',
            
          }}
        >
          Kullandığım Teknolojiler
        </Typography>

        <Grid container spacing={3}>
          {technologies.map((tech, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
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
                <Box
                  sx={{
                    color: tech.color,
                    mb: 2,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.2)',
                    },
                  }}
                >
                  {tech.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  {tech.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8 ,}}>
          <GitHubStats />
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;