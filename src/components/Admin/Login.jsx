import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  useTheme,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basit bir doğrulama - gerçek uygulamada bu bilgiler güvenli bir şekilde saklanmalı
    if (username === 'admin' && password === 'admin123') {
      // Başarılı giriş
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/admin/blog');
    } else {
      setError('Kullanıcı adı veya şifre hatalı');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="sm">
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 3,
            }}
          >
            <LoginIcon
              sx={{
                fontSize: 48,
                color: theme.palette.primary.main,
                mb: 2,
              }}
            />
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ color: 'text.primary' }}
            >
              Admin Girişi
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              '& .MuiTextField-root': {
                mb: 2,
              },
            }}
          >
            <TextField
              label="Kullanıcı Adı"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.1)',
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />
            <TextField
              label="Şifre"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.1)',
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{
                mt: 2,
                py: 1.5,
                bgcolor: theme.palette.primary.main,
                '&:hover': {
                  bgcolor: theme.palette.primary.dark,
                },
              }}
            >
              Giriş Yap
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
