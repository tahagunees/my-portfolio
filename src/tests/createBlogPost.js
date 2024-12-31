require('dotenv').config();
const Blog = require('../models/Blog');

const createTestPost = async () => {
  try {
    const blogPost = await Blog.create({
      title: "React ile Modern Web Geliştirme",
      content: `React, modern web uygulamaları geliştirmek için en popüler JavaScript kütüphanelerinden biridir. 
      
Facebook tarafından geliştirilen React, bileşen tabanlı bir yaklaşım sunar ve Virtual DOM sayesinde yüksek performanslı kullanıcı arayüzleri oluşturmanıza olanak tanır.

Bu yazıda React'in temel özelliklerini ve modern web geliştirmedeki önemini inceleyeceğiz.`,
      slug: "react-ile-modern-web-gelistirme",
      imageUrl: "https://example.com/react-image.jpg",
      tags: ["React", "JavaScript", "Web Development", "Frontend"]
    });

    console.log('Blog yazısı başarıyla oluşturuldu:', blogPost.toJSON());
  } catch (error) {
    console.error('Blog yazısı oluşturulurken hata:', error);
  }
};

createTestPost();
