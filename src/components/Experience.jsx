import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Şirket Adı",
      date: "2023 - Devam",
      type: "work",
      description: "React ve modern web teknolojileri ile geliştirmeler"
    },
    {
      title: "Yazılım Mühendisliği",
      company: "Samsun Üniversitesi",
      date: "2022 - Devam Ediyor",
      type: "education",
      description: "Lisans Derecesi"
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
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6 }}>
            Deneyim
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