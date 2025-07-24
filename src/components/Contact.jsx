import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ textAlign: 'center', mb: 6,fontFamily:'Pacifico,cursive' ,fontWeight: 700 }}>
          Get In Touch
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Full Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Email"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Subject"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Message"
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ mt: 3, mb: 2 }}
          >
            Send
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;