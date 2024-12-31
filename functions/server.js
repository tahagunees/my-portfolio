const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const blogRoutes = require('../src/routes/blogRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/.netlify/functions/server/api', blogRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Bir hata oluştu!' });
});

module.exports.handler = serverless(app);
