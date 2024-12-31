import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Chip,
  Button,
  Paper,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { blogService } from '../../services/blogService';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await blogService.getPostBySlug(slug);
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error('Blog yazısı yüklenirken hata:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <Typography>Yükleniyor...</Typography>;
  }

  if (!post) {
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
          <Typography variant="h4" sx={{ color: 'text.primary' }}>
            Blog yazısı bulunamadı
          </Typography>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/blog')}
            sx={{ mt: 2 }}
          >
            Blog Listesine Dön
          </Button>
        </Container>
      </Box>
    );
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
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/blog')}
          sx={{ mb: 4, color: 'text.primary' }}
        >
          Blog Listesine Dön
        </Button>

        <Paper
          elevation={0}
          sx={{
            p: 4,
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
          {post.imageUrl && (
            <Box
              component="img"
              src={post.imageUrl}
              alt={post.title}
              sx={{
                width: '100%',
                height: 400,
                objectFit: 'cover',
                borderRadius: 1,
                mb: 4,
              }}
            />
          )}

          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ color: 'text.primary' }}
          >
            {post.title}
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="subtitle1"
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
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: '#fff',
                  }}
                />
              ))}
            </Box>
          </Box>

          <Typography
            variant="body1"
            sx={{
              color: 'text.primary',
              lineHeight: 1.8,
              '& p': { mb: 2 },
            }}
          >
            {post.content}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default BlogPost;
