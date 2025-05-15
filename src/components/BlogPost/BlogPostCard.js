import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BlogPostCard.css';

const BlogPostCard = ({ post, index, inView }) => {
  return (
    <motion.article 
      className="blog-post-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 * index }}
      whileHover={{ y: -10 }}
    >
      <div className="blog-post-image">
        <img src={post.image} alt={post.title} />
        <span className="blog-post-category">{post.category}</span>
      </div>
      <div className="blog-post-content">
        <div className="blog-post-date">{post.date}</div>
        <h3 className="blog-post-title">{post.title}</h3>
        <p className="blog-post-excerpt">{post.excerpt}</p>
        <Link to={`/blog/${post.id}`} className="blog-post-read-more">
          Read More <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogPostCard;
