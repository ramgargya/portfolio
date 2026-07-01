import React from 'react';
import { Camera, Calendar, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Extracurricular.css';

export function Extracurricular() {
  const [secRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  const galleryItems = [
    {
      title: 'Macro Eye Photography',
      caption: 'High-detail iris and reflection capture',
      image: '/assets/extra_photography_1.jpg'
    },
    {
      title: 'Low-Light Floral Macro',
      caption: 'Close-up of a blue flower under moody spotlights',
      image: '/assets/extra_event_2.jpg'
    },
    {
      title: 'Landscape & Architecture',
      caption: 'Clouds hovering over campus structures',
      image: '/assets/extra_landscape_3.jpg'
    },
    {
      title: 'Water Splash Action',
      caption: 'High-speed capture of crystal droplets',
      image: '/assets/extra_splash_4.jpg'
    }
  ];

  return (
    <section id="extracurricular" className="extracurricular-section" ref={secRef}>
      <div className={`container reveal ${isVisible ? 'active' : ''}`}>
        <div className="center-title">
          <h2 className="section-title">Extracurricular Activities</h2>
        </div>

        <div className="extra-grid">
          {/* Text/Details Panel */}
          <div className="extra-info-panel glass-card">
            <div className="extra-header-row">
              <div className="extra-icon-container">
                <Camera size={24} />
              </div>
              <div className="extra-title-area">
                <h3 className="extra-role">Photographer</h3>
                <span className="extra-org">Footprints</span>
              </div>
            </div>

            <div className="extra-meta-row">
              <span className="extra-meta-item">
                <Calendar size={14} /> Feb 2023 – Nov 2023
              </span>
              <span className="extra-meta-item">
                <MapPin size={14} /> Ghaziabad, India
              </span>
            </div>

            <div className="extra-bullets-list">
              <div className="extra-bullet-item">
                <span className="bullet-arrow">&rarr;</span>
                <p className="bullet-text">
                  Captured and documented <strong>5-6 major college events</strong>, including high-profile events such as the <strong>Anti-drug competition</strong>.
                </p>
              </div>
              <div className="extra-bullet-item">
                <span className="bullet-arrow">&rarr;</span>
                <p className="bullet-text">
                  Shot, edited, and archived a repository of <strong>2000+ professional event photos</strong> for university publications and social media streams.
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="extra-metrics">
              <div className="metric-box">
                <span className="metric-val">2000+</span>
                <span className="metric-lbl">Photos Shot</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">6+</span>
                <span className="metric-lbl">Events Documented</span>
              </div>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="extra-gallery-panel">
            <h3 className="gallery-section-title">Photography Gallery</h3>
            <div className="gallery-grid">
              {galleryItems.map((item, idx) => (
                <div key={idx} className="gallery-card glass-card">
                  <div className="gallery-img-wrapper">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="gallery-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=80'; // fallback
                      }}
                    />
                    <div className="gallery-overlay">
                      <h4 className="gallery-item-title">{item.title}</h4>
                      <p className="gallery-item-caption">{item.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
