import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Certifications.css';

export function Certifications() {
  const [secRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  const certifications = [
    {
      title: 'Java Fundamentals',
      issuer: 'FrontendMasters',
      date: '2024',
      image: '/assets/cert_java_fundamentals.png',
      link: '/assets/cert_java_fundamentals.png'
    },
    {
      title: 'Java Full Stack',
      issuer: 'Codeforsuccess',
      date: '2024',
      image: '/assets/cert_java_fullstack.png',
      link: '/assets/cert_java_fullstack.png'
    },
    {
      title: 'Introduction to Docker',
      issuer: 'Intellipaat',
      date: '2025',
      image: '/assets/cert_docker.png',
      link: '/assets/cert_docker.png'
    },
    {
      title: 'Linux and Command Line',
      issuer: 'FrontendMasters',
      date: '2025',
      image: '/assets/cert_linux.png',
      link: '/assets/cert_linux.png'
    }
  ];

  return (
    <section id="certifications" className="certifications-section" ref={secRef}>
      <div className={`container reveal ${isVisible ? 'active' : ''}`}>
        <div className="center-title">
          <span className="section-subtitle">Verified Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-card glass-card">
              <div className="cert-image-container">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="cert-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80'; // fallback
                  }}
                />
              </div>

              <div className="cert-details">
                <div className="cert-title-row">
                  <Award className="cert-badge-icon" size={18} />
                  <h3 className="cert-card-title">{cert.title}</h3>
                </div>
                
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">&bull; {cert.date}</span>
                </div>

                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary cert-verify-btn"
                >
                  View Credential <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
