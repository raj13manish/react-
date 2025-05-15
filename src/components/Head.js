// src/components/Head.js
import { useEffect } from 'react';

const Head = ({ title, description }) => {
  useEffect(() => {
    // Update the document title
    document.title = title ? `${title} | Yashah Media` : 'Yashah Media - Beyond Digital Boundaries';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        description || 'Yashah Media - Beyond Digital Boundaries. We are a leading digital solutions company specializing in Social Media Marketing, SEO, Website & App Development, Brand Promotions, and more.'
      );
    }
  }, [title, description]);
  
  return null; // This component doesn't render anything
};

export default Head;
