import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { portfolioData } from '../mock';
import BlogSection3D from './sections3D/BlogSection3D';

const Blog = () => {
  const { blogPosts } = portfolioData;
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Get unique categories
  const categories = ['Todos', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts
  const filteredPosts = selectedCategory === 'Todos'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const handleReadMore = (postId) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <section id="blog" className="blog-section">
      <BlogSection3D />
      {/* Floating 3D Elements */}
      <div className="floating-element floating-element-1"></div>
      <div className="floating-element floating-element-2"></div>
      <div className="floating-element floating-element-3"></div>

      <div className="section-container">
        <div className="blog-header">
          <h2 className="section-title animate-on-scroll">Blog & Insights</h2>
          <p className="section-description animate-on-scroll">
            Compartilho minha experiência em desenvolvimento, arquitetura de software
            e lições aprendidas construindo sistemas reais.
          </p>
        </div>

        {/* Category Filter */}
        <div className="blog-filters animate-on-scroll">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="featured-posts">
          {filteredPosts
            .filter(post => post.featured)
            .map((post, index) => (
              <div 
                key={post.id} 
                className="featured-post-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="featured-post-image-wrapper">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="featured-post-image"
                  />
                  <div className="featured-badge">Featured</div>
                </div>
                <div className="featured-post-content">
                  <div className="post-meta">
                    <span className="post-category">{post.category}</span>
                    <div className="post-meta-items">
                      <span className="post-meta-item">
                        <Calendar size={14} />
                        {formatDate(post.date)}
                      </span>
                      <span className="post-meta-item">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <h3 className="featured-post-title">{post.title}</h3>
                  <p className="featured-post-excerpt">{post.excerpt}</p>
                  <div className="post-tags">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="post-tag">
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => handleReadMore(post.id)}
                    className="btn-read-more"
                  >
                    Ler Artigo
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Regular Posts Grid */}
        <div className="blog-posts-grid">
          {filteredPosts
            .filter(post => !post.featured)
            .map((post, index) => (
              <div 
                key={post.id} 
                className="blog-post-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="blog-post-image-wrapper">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="blog-post-image"
                  />
                  <span className="blog-post-category">{post.category}</span>
                </div>
                <div className="blog-post-content">
                  <div className="post-meta-small">
                    <span className="post-meta-item">
                      <Calendar size={12} />
                      {formatDate(post.date)}
                    </span>
                    <span className="post-meta-item">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="blog-post-title">{post.title}</h3>
                  <p className="blog-post-excerpt">{post.excerpt}</p>
                  <div className="post-tags-small">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="post-tag-small">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => handleReadMore(post.id)}
                    className="btn-read-more-small"
                  >
                    Ler mais
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
