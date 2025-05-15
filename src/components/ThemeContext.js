// src/component/ThemeContext.js
import React, { createContext, useState, useEffect, useCallback } from 'react';

// Define theme colors and styles
const themes = {
  light: {
    background: '#ffffff',
    textPrimary: '#333333',
    textSecondary: '#555555',
    accent: '#007bff',
    border: '#dddddd',
    cardBg: '#f8f9fa',
    shadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  dark: {
    background: '#121212',
    textPrimary: '#e0e0e0',
    textSecondary: '#a0a0a0',
    accent: '#0a84ff',
    border: '#333333',
    cardBg: '#1e1e1e',
    shadow: '0 2px 4px rgba(0, 0, 0, 0.4)'
  }
};

// Create the context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    // Check if running in a browser environment
    if (typeof window !== 'undefined') {
      // Check saved theme in localStorage
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) {
        return saved === 'true';
      }
      // If not saved, fallback to system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    // Default to light mode for SSR
    return false;
  });

  // Get the current theme object
  const theme = darkMode ? themes.dark : themes.light;

  // Apply theme to document and localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Save theme to localStorage
      localStorage.setItem('darkMode', darkMode.toString());

      // Apply theme to document root
      document.documentElement.style.backgroundColor = theme.background;
      document.documentElement.style.color = theme.textPrimary;
      document.body.style.backgroundColor = theme.background;
      document.body.style.color = theme.textPrimary;
      document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
      
      // Set a data attribute for potential CSS overrides
      document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }
  }, [darkMode, theme]);

  // Listen for system preference changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e) => {
        // Only update if user hasn't manually set a preference
        if (localStorage.getItem('darkMode') === null) {
          setDarkMode(e.matches);
        }
      };
      
      // Add event listener
      mediaQuery.addEventListener('change', handleChange);
      
      // Clean up
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using theme
export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
