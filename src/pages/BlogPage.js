import React from 'react';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/PageTransition';
import Head from '../components/Head';
import BlogPostCard from '../components/BlogPost/BlogPostCard';

const BlogPage = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  // Sample blog posts data
 const posts = [
  {
    id: 1,
    title: "The Future of Digital Marketing in 2025",
    excerpt: "Exploring emerging trends, AI integration, and personalized strategies that will shape digital marketing landscape in the coming years.",
    date: "May 10, 2025",
    category: "Digital Marketing",
    image: "/assets/images/digital.jpg"
  },
  {
    id: 2,
    title: "Effective SEO Strategies for E-commerce Growth",
    excerpt: "Learn how to optimize your e-commerce store with proven SEO techniques that drive traffic and increase conversions.",
    date: "May 5, 2025",
    category: "SEO",
    image: "/assets/images/seo.jpg"
  },
  {
    id: 3,
    title: "Building Brand Identity Through Social Media",
    excerpt: "Discover how to establish and strengthen your brand's online presence through strategic social media campaigns.",
    date: "April 28, 2025",
    category: "Social Media",
    image: "/assets/images/Social.jpg"
  },
  {
    id: 4,
    title: "Web Development Trends to Watch in 2025",
    excerpt: "Stay ahead of the curve with these cutting-edge web development trends that are reshaping the digital landscape.",
    date: "April 20, 2025",
    category: "Web Development",
    image: "/assets/images/web.jpg"
  },
  {
    id: 5,
    title: "The Power of Video Marketing for Businesses",
    excerpt: "Learn how video content can significantly boost your marketing efforts and drive better engagement with your audience.",
    date: "April 15, 2025",
    category: "Video Marketing",
    image: "/assets/images/video.jpg"
  },
  {
    id: 6,
    title: "Creating Effective Content Marketing Strategies",
    excerpt: "Discover how to develop content that resonates with your target audience and drives meaningful business results.",
    date: "April 5, 2025",
    category: "Content Marketing",
    image: "/assets/images/content.jpg"
  }
];

  
  
  return (
    <PageTransition>
      <Head 
        title="Blog" 
        description="Insights, trends, and updates from our digital experts at Yashah Media." 
      />
      
      <section className="page-header">
        <div className="container">
          <h1>Blog</h1>
          <p>Insights, trends, and updates from our digital experts</p>
        </div>
      </section>
      
      <section className="blog-content" ref={ref}>
        <div className="container">
          <div className="blog-filters">
            <button className="blog-filter active">All</button>
            <button className="blog-filter">Digital Marketing</button>
            <button className="blog-filter">SEO</button>
            <button className="blog-filter">Social Media</button>
            <button className="blog-filter">Web Development</button>
          </div>
          
          <div className="blog-grid">
            {posts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} inView={inView} />
            ))}
          </div>
          
          <div className="blog-pagination">
            <button className="pagination-button active">1</button>
            <button className="pagination-button">2</button>
            <button className="pagination-button">3</button>
            <span className="pagination-ellipsis">...</span>
            <button className="pagination-button">10</button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default BlogPage;
