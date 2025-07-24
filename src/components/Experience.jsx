import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const Experience = () => {
  const experiences = [
    {
      title: "Game Developer",
      company: "Unico Studio",
      date: "2020 - Present",
      type: "work",
      description: "Developing mobile and PC games using Unity and C#. Working with various SDKs including Nakama, Azure PlayFab, and Photon Network. Contributing to innovative gaming projects with focus on gameplay mechanics and user experience."
    },
    {
      title: "Computer Engineering",
      company: "Istanbul University",
      date: "2016 - 2020",
      type: "education",
      description: "Bachelor's Degree - Focused on game programming and software development fundamentals."
    }
  ];

  return (
    <Box id="experience" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6 ,
            fontFamily:'Pacifico,cursive'
          }}>
            Experience
          </Typography>
          
          <Timeline position="alternate">
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    {exp.type === 'work' ? <WorkIcon /> : <SchoolIcon />}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                      boxShadow: 1,
                    }}
                  >
                    <Typography variant="h6">{exp.title}</Typography>
                    <Typography color="textSecondary">{exp.company}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {exp.date}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {exp.description}
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;