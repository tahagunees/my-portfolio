require('dotenv').config();
const Blog = require('../models/Blog');

const readBlogPosts = async () => {
  try {
    // Tüm blog yazılarını getir
    const posts = await Blog.findAll({
      order: [['createdAt', 'DESC']]
    });

    console.log('\nTüm Blog Yazıları:');
    posts.forEach(post => {
      console.log('\n-------------------');
      console.log('Başlık:', post.title);
      console.log('Slug:', post.slug);
      console.log('Etiketler:', post.tags.join(', '));
      console.log('Oluşturulma Tarihi:', new Date(post.createdAt).toLocaleString('tr-TR'));
      console.log('-------------------\n');
    });

    // Belirli bir blog yazısını getir
    const singlePost = await Blog.findOne({
      where: { slug: 'react-ile-modern-web-gelistirme' }
    });

    if (singlePost) {
      console.log('\nSeçili Blog Yazısı Detayı:');
      console.log('Başlık:', singlePost.title);
      console.log('İçerik:', singlePost.content);
      console.log('Etiketler:', singlePost.tags.join(', '));
      console.log('Resim URL:', singlePost.imageUrl);
    }
  } catch (error) {
    console.error('Blog yazıları okunurken hata:', error);
  }
};

readBlogPosts();
