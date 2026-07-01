import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import './ThemeToggle.css';

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [animating, setAnimating] = useState(null); // 'light' | 'dark' | null

  useEffect(() => {
    // Force dark mode as default
    document.body.classList.remove('light-mode');
  }, []);

  const handleToggle = () => {
    if (animating) return; // Prevent clicking while animation is running

    const nextTheme = !isDarkMode;
    const transitionType = nextTheme ? 'dark' : 'light';
    
    setAnimating(transitionType);

    // Swap the class under the transition overlay at exactly 800ms
    setTimeout(() => {
      if (nextTheme) {
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
      }
      setIsDarkMode(nextTheme);
    }, 800);

    // Clear animation state after keyframes finish (1600ms)
    setTimeout(() => {
      setAnimating(null);
    }, 1600);
  };

  return (
    <>
      <button 
        onClick={handleToggle} 
        className="theme-toggle-btn" 
        aria-label="Toggle theme"
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <div className="theme-toggle-icon-wrapper">
          {isDarkMode ? (
            <Sun className="theme-icon sun" size={20} />
          ) : (
            <Moon className="theme-icon moon" size={20} />
          )}
        </div>
      </button>

      {animating && (
        <div className={`theme-transition-overlay ${animating}`}>
          <div className="flying-celestial">
            {animating === 'light' ? (
              <Sun className="celestial-svg" size={32} />
            ) : (
              <Moon className="celestial-svg" size={32} />
            )}
          </div>
          <div className="swipe-reveal"></div>
        </div>
      )}
    </>
  );
}
