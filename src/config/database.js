require('dotenv').config();
const { Sequelize } = require('sequelize');

console.log('Veritabanı bağlantı bilgileri:', {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'portfolio_db',
  username: process.env.DB_USER || 'postgres',
});

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'portfolio_db',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'taha',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: true
});

// Veritabanı bağlantısını test et ve tabloları oluştur
const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Veritabanı bağlantısı başarılı.');
    
    // Blog modelini import et
    require('../models/Blog');
    
    // Tabloları oluştur
    await sequelize.sync({ alter: true });
    console.log('Tablolar başarıyla oluşturuldu.');
  } catch (error) {
    console.error('Veritabanı bağlantı hatası:', error.message);
    console.error('Hata detayları:', error);
  }
};

initDatabase();

module.exports = sequelize;