import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import carwash from '../assets/carwash.jpg';
const Projects = () => {
  const projects = [
    {
      title: 'Car Wash Automation',
      description: 'Oto Yıkama Dükkanları için geliştirdiğim bir otomasyon uygulaması.Python Qt arayüz kütüphanesi kullanılarak geliştirildi.',
      image: carwash,
      github: 'https://github.com/tahagunees/CarWashAutomation',
      demo: 'https://demo.com'
    },
    
    // Daha fazla proje ekleyebilirsiniz
  ];

  return (
    <Box id="projects" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
          Projelerim
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card 
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: (theme) =>
                      theme.palette.mode === 'dark'
                        ? '0 10px 20px rgba(0,0,0,0.5)'
                        : theme.shadows[10],
                  },
                  // Dark tema için özel stiller
                  bgcolor: (theme) =>
                    theme.palette.mode === 'dark' ? 'background.paper' : 'background.paper',
                  border: (theme) =>
                    theme.palette.mode === 'dark'
                      ? '1px solid rgba(255, 255, 255, 0.12)'
                      : 'none',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'text.primary', // Otomatik olarak tema rengini kullanır
                      mb: 2,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary', // Otomatik olarak tema rengini kullanır
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<GitHubIcon />} href={project.github} target="_blank">
                    GitHub
                  </Button>
                  <Button size="small" startIcon={<LaunchIcon />} href={project.demo} target="_blank">
                    Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;