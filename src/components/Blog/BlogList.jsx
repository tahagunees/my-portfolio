// BlogList.jsx
import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Box,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogService } from '../../services/blogService';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const data = await blogService.getAllPosts();
        setBlogs(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Blog yüklenirken hata:', error);
        setBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh'
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Container sx={{ py: 8 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Blog Yazıları
        </Typography>
        <Grid container spacing={4}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  component={Link}
                  to={`/blog/${blog.slug}`}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.palette.mode === 'dark' 
                        ? '0 8px 16px rgba(0,0,0,0.4)'
                        : '0 8px 16px rgba(0,0,0,0.1)',
                    },
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  }}
                >
                  {blog.imageUrl && (
                    <CardMedia
                      component="img"
                      sx={{
                        height: 200,
                        objectFit: 'cover',
                      }}
                      image={blog.imageUrl}
                      alt={blog.title}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x200?text=Blog+Resmi';
                      }}
                    />
                  )}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h2" color="text.primary" gutterBottom>
                      {blog.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 2 }}>
                      {new Date(blog.createdAt).toLocaleDateString('tr-TR')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {blog.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default BlogList;
