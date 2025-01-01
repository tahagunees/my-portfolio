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
      title: 'Car Wash Automation',
      description: 'Oto Yıkama Dükkanları için geliştirdiğim bir otomasyon uygulaması. Python Qt arayüz kütüphanesi kullanılarak geliştirildi.',
      image: carwash,
      github: 'https://github.com/tahagunees/CarWashAutomation',
      demoEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      title: 'Samsun Tanıtım',
      description: 'Samsun şehrinin konumu ve özellikleri hakkında bilgi.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Atakum_Sahili.jpg/1280px-Atakum_Sahili.jpg',
      demoEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.5521409693!2d36.16277669921875!3d41.322257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408877e8e2f65e3b%3A0xc76e36bf3a78efbc!2sSamsun!5e0!3m2!1str!2str!4v1704055236599!5m2!1str!2str'
    },
    {
      title: 'Aykut Hoca',
      description: 'Bazı çiçekler bazı topraklarda olmuyor',
      image: 'https://i.ytimg.com/vi/ncLtGldfIbM/maxresdefault.jpg',
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
          Projelerim
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
                      Kaynak Kod
                    </Button>
                  )}
                  {project.demoEmbed && (
                    <Button 
                      size="small" 
                      startIcon={<LaunchIcon />}
                      onClick={() => handleOpenDemo(project)}
                      data-testid={`demo-button-${index}`}
                    >
                      Önizleme
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