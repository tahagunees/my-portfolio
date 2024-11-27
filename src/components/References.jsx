import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const References = () => {
  const references = [
    {
      name: "İsim Soyisim",
      role: "Şirket / Pozisyon",
      avatar: "/path-to-avatar.jpg",
      comment: "Harika bir iş çıkardı, çok memnun kaldık...",
      rating: 5
    },
    // Diğer referanslar...
  ];

  return (
    <Box id="testimonials" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ textAlign: 'center', mb: 6 }}>
          Referanslar
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 4,
            overflowX: 'auto',
            pb: 2,
            px: 2,
            '::-webkit-scrollbar': { height: 8 },
            '::-webkit-scrollbar-track': { bgcolor: 'background.paper' },
            '::-webkit-scrollbar-thumb': { bgcolor: 'primary.main', borderRadius: 2 }
          }}
        >
          {references.map((reference, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card sx={{ minWidth: 300, maxWidth: 350 }}>
                <CardContent>
                  <FormatQuoteIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                  <Typography variant="body1" sx={{ my: 2 }}>
                    {reference.comment}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={reference.avatar} />
                    <Box>
                      <Typography variant="subtitle1">{reference.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {reference.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Rating value={reference.rating} readOnly sx={{ mt: 2 }} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default References;