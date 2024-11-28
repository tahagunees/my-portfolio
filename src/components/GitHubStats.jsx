import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const GitHubStats = () => {
  return (
    <Box>
      <Typography
        variant='h3' 
        sx={{
          fontFamily: 'Pacifico, cursive',
          textAlign: 'center',
          mb: 4,
          mt: 8,
          fontWeight: 700
        }}
      >
        Github Stats
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
              mb: {xs:2,md:0}
            }}
            src="https://github-readme-stats.vercel.app/api?username=tahagunees&show_icons=true&theme=radical&locale=tr"
            alt="GitHub Stats"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            }}
            src="https://github-readme-streak-stats.herokuapp.com/?user=tahagunees&theme=radical"
            alt="GitHub Streak Stats"
          />
           <Grid item xs={12} sx={{ mt: 3 }}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            }}
            src="https://ghchart.rshah.org/tahagunees"
            alt="GitHub Commit Chart"
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GitHubStats;