const Blog = require('../models/Blog');
const slugify = require('slugify');

// Tüm blog postlarını getir
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Blog.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Blog postları getirilirken bir hata oluştu' });
  }
};

// Tekil blog postu getir
exports.getPost = async (req, res) => {
  try {
    const post = await Blog.findOne({
      where: { slug: req.params.slug }
    });
    if (!post) {
      return res.status(404).json({ error: 'Blog postu bulunamadı' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Blog postu getirilirken bir hata oluştu' });
  }
};

// Yeni blog postu oluştur
exports.createPost = async (req, res) => {
  try {
    const { title, content, imageUrl, tags } = req.body;
    const slug = slugify(title, { lower: true, strict: true });
    
    const post = await Blog.create({
      title,
      content,
      slug,
      imageUrl,
      tags
    });
    
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Blog postu oluşturulurken bir hata oluştu' });
  }
};

// Blog postunu güncelle
exports.updatePost = async (req, res) => {
  try {
    const { title, content, imageUrl, tags } = req.body;
    const post = await Blog.findOne({
      where: { slug: req.params.slug }
    });
    
    if (!post) {
      return res.status(404).json({ error: 'Blog postu bulunamadı' });
    }

    const updates = {
      title: title || post.title,
      content: content || post.content,
      imageUrl: imageUrl || post.imageUrl,
      tags: tags || post.tags
    };

    if (title) {
      updates.slug = slugify(title, { lower: true, strict: true });
    }

    await post.update(updates);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Blog postu güncellenirken bir hata oluştu' });
  }
};

// Blog postunu sil
exports.deletePost = async (req, res) => {
  try {
    const post = await Blog.findOne({
      where: { slug: req.params.slug }
    });
    
    if (!post) {
      return res.status(404).json({ error: 'Blog postu bulunamadı' });
    }

    await post.destroy();
    res.json({ message: 'Blog postu başarıyla silindi' });
  } catch (error) {
    res.status(500).json({ error: 'Blog postu silinirken bir hata oluştu' });
  }
};
