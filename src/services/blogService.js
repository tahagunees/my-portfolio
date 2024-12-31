import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const blogService = {
  getAllPosts: async () => {
    try {
      const response = await axios.get(`${API_URL}/posts`);
      return response.data;
    } catch (error) {
      console.error('Blog yazıları alınırken hata:', error);
      throw error;
    }
  },

  getPost: async (slug) => {
    try {
      const response = await axios.get(`${API_URL}/posts/${slug}`);
      return response.data;
    } catch (error) {
      console.error('Blog yazısı alınırken hata:', error);
      throw error;
    }
  },

  createPost: async (postData) => {
    try {
      const response = await axios.post(`${API_URL}/posts`, postData);
      return response.data;
    } catch (error) {
      console.error('Blog yazısı oluşturulurken hata:', error);
      throw error;
    }
  },

  updatePost: async (slug, postData) => {
    try {
      const response = await axios.put(`${API_URL}/posts/${slug}`, postData);
      return response.data;
    } catch (error) {
      console.error('Blog yazısı güncellenirken hata:', error);
      throw error;
    }
  },

  deletePost: async (slug) => {
    try {
      const response = await axios.delete(`${API_URL}/posts/${slug}`);
      return response.data;
    } catch (error) {
      console.error('Blog yazısı silinirken hata:', error);
      throw error;
    }
  }
};
