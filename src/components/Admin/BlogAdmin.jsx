import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Dialog,
  Typography,
  Box,
  useTheme
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { blogService } from '../../services/blogService';
import BlogForm from './BlogForm';

const BlogAdmin = () => {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
      return;
    }

    fetchPosts();
  }, [navigate]);

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

  const handleAdd = () => {
    setSelectedPost(null);
    setOpen(true);
  };

  const handleEdit = (post) => {
    setSelectedPost(post);
    setOpen(true);
  };

  const handleDelete = async (slug) => {
    if (window.confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) {
      try {
        await blogService.deletePost(slug);
        await fetchPosts();
      } catch (error) {
        console.error('Blog yazısı silinirken hata:', error);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPost(null);
  };

  const handleSave = async (postData) => {
    try {
      if (selectedPost) {
        await blogService.updatePost(selectedPost.slug, postData);
      } else {
        await blogService.createPost(postData);
      }
      await fetchPosts();
      handleClose();
    } catch (error) {
      console.error('Blog yazısı kaydedilirken hata:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/admin/login');
  };

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
            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(8px)',
            borderRadius: 2,
            border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
            <Typography variant="h4" sx={{ color: 'text.primary' }}>Blog Yönetimi</Typography>
            <Box>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleAdd}
                sx={{ mr: 2 }}
              >
                Yeni Yazı
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleLogout}
              >
                Çıkış Yap
              </Button>
            </Box>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Başlık</TableCell>
                  <TableCell>Slug</TableCell>
                  <TableCell>Tarih</TableCell>
                  <TableCell>Etiketler</TableCell>
                  <TableCell align="right">İşlemler</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts.map((post) => (
                  <TableRow 
                    key={post.id}
                    sx={{
                      '&:hover': {
                        bgcolor: theme.palette.mode === 'dark' 
                          ? 'rgba(255, 255, 255, 0.05)' 
                          : 'rgba(0, 0, 0, 0.02)'
                      }
                    }}
                  >
                    <TableCell>{post.title}</TableCell>
                    <TableCell>{post.slug}</TableCell>
                    <TableCell>
                      {new Date(post.createdAt).toLocaleDateString('tr-TR')}
                    </TableCell>
                    <TableCell>{post.tags.join(', ')}</TableCell>
                    <TableCell align="right">
                      <IconButton 
                        onClick={() => handleEdit(post)} 
                        color="primary"
                        sx={{ 
                          '&:hover': { 
                            bgcolor: theme.palette.mode === 'dark' 
                              ? 'rgba(144, 202, 249, 0.08)' 
                              : 'rgba(25, 118, 210, 0.08)' 
                          } 
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton 
                        onClick={() => handleDelete(post.slug)} 
                        color="error"
                        sx={{ 
                          '&:hover': { 
                            bgcolor: theme.palette.mode === 'dark' 
                              ? 'rgba(244, 67, 54, 0.08)' 
                              : 'rgba(211, 47, 47, 0.08)' 
                          } 
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Dialog 
          open={open} 
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              bgcolor: theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              borderRadius: 2,
              border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            }
          }}
        >
          <BlogForm
            post={selectedPost}
            onSave={handleSave}
            onCancel={handleClose}
          />
        </Dialog>
      </Container>
    </Box>
  );
};

export default BlogAdmin;
