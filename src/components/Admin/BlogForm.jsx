import React, { useState, useEffect } from 'react';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Chip,
  Stack
} from '@mui/material';

const BlogForm = ({ post, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: '',
    tags: []
  });
  const [newTag, setNewTag] = useState('');

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title,
        content: post.content,
        imageUrl: post.imageUrl,
        tags: post.tags
      });
    }
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && newTag.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(newTag.trim())) {
        setFormData(prev => ({
          ...prev,
          tags: [...prev.tags, newTag.trim()]
        }));
      }
      setNewTag('');
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToDelete)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogTitle>
        {post ? 'Blog Yazısını Düzenle' : 'Yeni Blog Yazısı'}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            name="title"
            label="Başlık"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            name="content"
            label="İçerik"
            value={formData.content}
            onChange={handleChange}
            multiline
            rows={10}
            fullWidth
            required
          />
          <TextField
            name="imageUrl"
            label="Resim URL"
            value={formData.imageUrl}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Etiket Ekle"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyPress={handleAddTag}
            helperText="Enter tuşuna basarak etiket ekleyin"
            fullWidth
          />
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {formData.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                onDelete={() => handleDeleteTag(tag)}
                sx={{ m: 0.5 }}
              />
            ))}
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>İptal</Button>
        <Button type="submit" variant="contained" color="primary">
          Kaydet
        </Button>
      </DialogActions>
    </form>
  );
};

export default BlogForm;
