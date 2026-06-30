import React from 'react';
import { Calendar, MapPin, Award, Clock } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Education.css';

export function Education() {
  const [secRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  const educationList = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'Ajay Kumar Garg Engineering College',
      location: 'Ghaziabad, India',
      period: '2022 – 2026',
      specialization: 'Information Technology',
      performance: 'CGPA: 8.11',
      highlights: [
        { label: 'Academic Standing', value: '8.11 CGPA', icon: <Award size={18} /> },
        { label: 'Duration', value: '4 Years', icon: <Clock size={18} /> }
      ],
      details: [
        'Core coursework includes DSA, OOPs, OS, CN and DBMS'
      ]
    },
    {
      degree: 'Intermediate',
      institution: 'Bhajanpal Bhati Educational Group',
      location: 'Bulandshahr, India',
      period: '2019 – 2020',
      specialization: 'Science',
      performance: 'Percentage: 82%',
      highlights: [
        { label: 'Academic Standing', value: '82%', icon: <Award size={18} /> },
        { label: 'Duration', value: '1 Year', icon: <Clock size={18} /> }
      ],
      details: [
        'Secure 2nd position in the school'
      ]
    }
  ];

  return (
    <section id="education" className="education-section" ref={secRef}>
      <div className={`container reveal ${isVisible ? 'active' : ''}`}>
        <div className="center-title">
          <span className="section-subtitle">Academic Profile</span>
          <h2 className="section-title">Education History</h2>
        </div>

        <div className="education-timeline-container">
          <div className="timeline-line"></div>
          
          {educationList.map((edu, idx) => (
            <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left-side' : 'right-side'}`}>
              <div className="timeline-badge">
                <span className="timeline-badge-year">{idx === 0 ? '2022' : '2019'}</span>
              </div>
              
              <div className="education-card-wrapper">
                <div className="education-header glass-card">
                  <div className="education-title-area">
                    <div className="degree-institution">
                      <h3 className="edu-degree">{edu.degree}</h3>
                      <span className="edu-institution">{edu.institution}</span>
                    </div>
                    <div className="edu-meta">
                      <span className="edu-meta-item">
                        <Calendar size={14} /> {edu.period}
                      </span>
                      <span className="edu-meta-item">
                        <MapPin size={14} /> {edu.location}
                      </span>
                    </div>
                  </div>
                  
                  <div className="edu-specialization">
                    <strong>Specialization:</strong> {edu.specialization}
                  </div>

                  {/* Highlights Grid matching Experience style */}
                  <div className="education-highlights">
                    {edu.highlights.map((hl, hlIdx) => (
                      <div key={hlIdx} className="highlight-item glass-card">
                        <div className="hl-icon-val">
                          <span className="hl-icon">{hl.icon}</span>
                          <span className="hl-value">{hl.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bullet Details */}
                  <div className="edu-details-list">
                    {edu.details.map((detail, dIdx) => (
                      <div key={dIdx} className="edu-detail-item">
                        <span className="edu-detail-bullet">&rarr;</span>
                        <p className="edu-detail-text">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
