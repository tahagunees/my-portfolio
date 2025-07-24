import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Dialog } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import carwash from '../assets/carwash.jpg';
import IFrameComponent from './common/IFrameComponent';

const Projects = () => {
  const [openDemo, setOpenDemo] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);

  const handleOpenDemo = (project) => {
    setSelectedProject(project);
    setOpenDemo(true);
  };

  const handleCloseDemo = () => {
    setOpenDemo(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: 'Mobile Racing Game',
      description: 'Developed a mobile racing game using Unity and C#. Implemented car physics, AI opponents, and multiplayer functionality using Photon Network.',
      image: 'https://unity.com/sites/default/files/styles/16_9_l_scale_width/public/2021-02/Unity-Gaming-Services-hero.jpg',
      github: 'https://github.com/cagrisahin',
    },
    {
      title: 'Level Editor Tool',
      description: 'Created a custom level editor tool for rapid game level design. Built with Unity Editor scripting to streamline the development workflow.',
      image: 'https://docs.unity3d.com/uploads/Main/LevelEditor.png',
      demoEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      title: 'Multiplayer Battle Arena',
      description: 'Developed a real-time multiplayer battle arena game using Nakama and Azure PlayFab for backend services. Features matchmaking and player progression.',
      image: 'https://blog.unity.com/sites/default/files/2021-03/Prototyping-header.jpg',
      demoEmbed: 'https://www.youtube.com/embed/ncLtGldfIbM'
    }
  ];

  return (
    <Box id="projects" data-testid="projects-section" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          data-testid="projects-title"
          sx={{ 
            textAlign: 'center', 
            mb: 6, 
            fontWeight: 700, 
            fontFamily: 'Pacifico,cursive' 
          }}
        >
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card 
                data-testid={`project-card-${index}`}
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
                  data-testid={`project-image-${index}`}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    data-testid={`project-title-${index}`}
                    sx={{
                      color: 'text.primary',
                      fontFamily: 'Poppins, sans-serif',
                      mb: 2,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    data-testid={`project-description-${index}`}
                    sx={{
                      color: 'text.secondary',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  {project.github && (
                    <Button 
                      size="small" 
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`github-button-${index}`}
                    >
                      Source Code
                    </Button>
                  )}
                  {project.demoEmbed && (
                    <Button 
                      size="small" 
                      startIcon={<LaunchIcon />}
                      onClick={() => handleOpenDemo(project)}
                      data-testid={`demo-button-${index}`}
                    >
                      Preview
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog
        open={openDemo}
        onClose={handleCloseDemo}
        maxWidth="md"
        fullWidth
        data-testid="demo-dialog"
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 0,
            m: 2,
            width: '100%',
            maxWidth: '900px',
            height: 'auto',
            maxHeight: '80vh',
          }
        }}
      >
        {selectedProject && (
          <IFrameComponent
            src={selectedProject.demoEmbed}
            title={selectedProject.title}
            height="500px"
            style={{
              borderRadius: '4px',
              overflow: 'hidden'
            }}
          />
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;