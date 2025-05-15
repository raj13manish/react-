import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import BlogPostCard from '../BlogPost/BlogPostCard';
import './NewsSection.css';

const NewsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const news = [
    {
      id: 1,
      title: "The Future of Digital Marketing in 2025",
      excerpt: "Exploring emerging trends, AI integration, and personalized strategies that will shape digital marketing landscape in the coming years.",
      date: "May 10, 2025",
      category: "Digital Marketing",
      image: "/assets/images/digital.jpg"  // ✅ Fixed path
    },
    {
      id: 2,
      title: "Effective SEO Strategies for E-commerce Growth",
      excerpt: "Learn how to optimize your e-commerce store with proven SEO techniques that drive traffic and increase conversions.",
      date: "May 5, 2025",
      category: "SEO",
      image: "/assets/images/e.jpg"  // ✅ Fixed path
    },
    {
      id: 3,
      title: "Building Brand Identity Through Social Media",
      excerpt: "Discover how to establish and strengthen your brand's online presence through strategic social media campaigns.",
      date: "April 28, 2025",
      category: "Social Media",
      image: "/assets/images/Social.jpg"  // ✅ Fixed path
    }
  ];

  return (
    <section className="news" id="news" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="section-subtitle">Recent News</h6>
          <h2 className="section-title">Our Exceptional Digital Industrial News</h2>
          <p className="section-description">
            Stay updated with our latest achievements, industry insights, and success stories. Explore innovative trends, project highlights, and expert opinions shaping the future of digital marketing and technology.
          </p>
        </motion.div>

        <div className="news-grid">
          {news.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} inView={inView} />
          ))}
        </div>

        <motion.div 
          className="news-more-btn"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/blog" className="btn btn-secondary">View All News</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
