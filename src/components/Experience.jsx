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
      date: "May 2023 - Present",
      type: "work",
      description: "Working on puzzle games, implementing new features and improvements using Unity. Developing engaging gameplay mechanics and optimizing performance for mobile platforms."
    },
    {
      title: "Game Developer",
      company: "Hazmob",
      date: "Sep 2022 - Apr 2023",
      type: "work",
      description: "Contributed to the development and launch of 2 mobile games. Utilized Azure PlayFab for backend management and Photon Network for real-time multiplayer capabilities. Collaborated with designers to enhance game graphics and user experience."
    },
    {
      title: "Game Developer",
      company: "Banba Games",
      date: "Feb 2021 - Jul 2022",
      type: "work",
      description: "Developed game mechanics and features for various mobile games. Conducted debugging and testing to ensure high-quality gameplay using Unity and mobile game development best practices."
    },
    {
      title: "Game Developer",
      company: "DaBomb Games",
      date: "Jul 2020 - Feb 2021",
      type: "work",
      description: "Assisted in the development of mobile games, focusing on user experience and performance optimization. Worked independently on specific game development tasks."
    },
    {
      title: "Computer Science",
      company: "İstanbul University",
      date: "2017 - 2022",
      type: "education",
      description: "Bachelor's Degree in Computer Science (GPA: 3.06). Completed a senior project on a multiplayer game using socket networking, demonstrating expertise in game development and networking technologies."
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