import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  useTheme,
  Paper,
} from '@mui/material';
import { blogService } from '../../services/blogService';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await blogService.getAllPosts();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Blog yazıları yüklenirken hata:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Typography>Yükleniyor...</Typography>;
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        pt: 10,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 4,
            bgcolor: theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(8px)',
            borderRadius: 2,
            border: `1px solid ${
              theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(0, 0, 0, 0.1)'
            }`,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ color: 'text.primary', mb: 4 }}
          >
            Blog Yazıları
          </Typography>

          <Grid container spacing={4}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card
                  component={Link}
                  to={`/blog/${post.slug}`}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    bgcolor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(8px)',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                    border: `1px solid ${
                      theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.1)'
                    }`,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.imageUrl || 'https://source.unsplash.com/random'}
                    alt={post.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ color: 'text.primary' }}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {new Date(post.createdAt).toLocaleDateString('tr-TR')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {post.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: theme.palette.primary.main,
                            color: '#fff',
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default BlogList;
