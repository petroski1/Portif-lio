import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { portfolioData } from '../mock';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = portfolioData.blogPosts.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="blog-post-container">
          <h1>Artigo não encontrado</h1>
          <button onClick={() => navigate('/')} className="btn-back">
            <ArrowLeft size={20} />
            Voltar ao Portfólio
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div className="blog-post-page">
      {/* Hero Image */}
      <div className="blog-post-hero">
        <img src={post.image} alt={post.title} className="blog-post-hero-image" />
        <div className="blog-post-hero-overlay"></div>
      </div>

      <div className="blog-post-container">
        {/* Back Button */}
        <button onClick={() => navigate('/')} className="btn-back">
          <ArrowLeft size={20} />
          Voltar ao Portfólio
        </button>

        {/* Post Header */}
        <div className="blog-post-header">
          <span className="blog-post-category-badge">{post.category}</span>
          <h1 className="blog-post-main-title">{post.title}</h1>
          
          <div className="blog-post-meta-info">
            <span className="blog-post-meta-item">
              <Calendar size={16} />
              {formatDate(post.date)}
            </span>
            <span className="blog-post-meta-item">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>

          <div className="blog-post-tags-list">
            {post.tags.map((tag, idx) => (
              <span key={idx} className="blog-post-tag-item">
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Post Content */}
        <article className="blog-post-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        {/* Author Section */}
        <div className="blog-post-author">
          <img 
            src={portfolioData.personalInfo.photoPlaceholder} 
            alt={portfolioData.personalInfo.fullName}
            className="blog-post-author-photo"
          />
          <div className="blog-post-author-info">
            <h3>{portfolioData.personalInfo.fullName}</h3>
            <p>{portfolioData.personalInfo.title}</p>
            <p className="blog-post-author-bio">{portfolioData.personalInfo.bio}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="blog-post-navigation">
          <button onClick={() => navigate('/')} className="btn-secondary">
            <ArrowLeft size={20} />
            Voltar ao Portfólio
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
