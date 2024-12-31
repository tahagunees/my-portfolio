require('dotenv').config();
const express = require('express');
const cors = require('cors');
const blogRoutes = require('./src/routes/blogRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', blogRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Bir hata oluştu!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});
