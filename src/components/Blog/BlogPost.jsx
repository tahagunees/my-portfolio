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
import { motion } from 'framer-motion';
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
      } catch (error) {
        console.error('Blog yazısı yüklenirken hata:', error);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, navigate]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <Typography>Yükleniyor...</Typography>
      </Box>
    );
  }

  if (!post) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <Typography>Blog yazısı bulunamadı.</Typography>
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
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Button
          onClick={() => navigate('/blog')}
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 4 }}
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
          <Typography variant="h3" component="h1" gutterBottom>
            {post.title}
          </Typography>

          <Typography color="text.secondary" sx={{ mb: 3 }}>
            {new Date(post.createdAt).toLocaleDateString('tr-TR')}
          </Typography>

          {post.imageUrl && (
            <Box
              component="img"
              src={post.imageUrl}
              alt={post.title}
              sx={{
                width: '100%',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 1,
                mb: 4,
              }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/1200x500?text=Blog+Resmi';
              }}
            />
          )}

          {post.tags && post.tags.length > 0 && (
            <Box sx={{ mb: 4 }}>
              {post.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  sx={{
                    mr: 1,
                    mb: 1,
                    bgcolor: theme.palette.primary.main,
                    color: '#fff',
                  }}
                />
              ))}
            </Box>
          )}

          <Typography
            variant="body1"
            component="div"
            sx={{
              '& p': { mb: 2 },
              '& img': {
                maxWidth: '100%',
                height: 'auto',
                borderRadius: 1,
                my: 2
              }
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Paper>
      </Container>
    </motion.div>
  );
};

export default BlogPost;
