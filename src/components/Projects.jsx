import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Projects.css';

export function Projects() {
  const [secRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  const projects = [
    {
      title: 'ResumeCraft',
      date: 'May 2026',
      image: '/assets/resumecraft.png',
      tags: ['React.js', 'Spring Boot', 'PostgreSQL', 'Gemini AI', 'Spring Security', 'Razorpay', 'Docker'],
      description: 'An AI-powered resume builder designed to help job seekers create optimized, ATS-friendly resumes and get real-time feedback using Google Gemini AI.',
      bullets: [
        'Built an AI-powered resume builder supporting 10+ custom resume management modules.',
        'Integrated Google Gemini AI for ATS scoring, resume optimization, and real-time chatbot assistance.',
        'Secured 15+ REST APIs using Spring Security, JWT, and Google OAuth 2.0.',
        'Implemented OTP-based account verification and password reset workflows using SMTP email services.',
        'Integrated Razorpay payments and containerized the application using Docker.'
      ],
      github: 'https://github.com/ramgargya',
      demo: '#'
    },
    {
      title: 'BiteBox',
      date: 'Jul 2025',
      image: '/assets/bitebox.png',
      tags: ['React', 'Spring Boot', 'MongoDB', 'Cloudinary', 'Spring Security', 'JWT'],
      description: 'A full-stack online food delivery platform built for speed and security, featuring multiple roles (customer and admin) and robust catalog management.',
      bullets: [
        'Full-stack food delivery platform supporting 2+ user roles and serving 1,000+ food items.',
        'Built and secured 15+ RESTful APIs with JWT authentication and Spring Security, reducing unauthorized access risks by 90%.',
        'Implemented role-based access control (RBAC) for separate Admin and User workflows, improving system management efficiency by 40%.'
      ],
      github: 'https://github.com/ramgargya',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section" ref={secRef}>
      <div className={`container reveal ${isVisible ? 'active' : ''}`}>
        <div className="center-title">
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card glass-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80'; // fallback
                  }}
                />
                <div className="project-overlay">
                  <div className="project-overlay-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-overlay-btn" title="View Source on GitHub">
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg> Code
                    </a>
                    <a href={project.demo} className="project-overlay-btn" title="View Live Demo">
                      <ExternalLink size={20} /> Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-details">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-date">
                    <Calendar size={14} /> {project.date}
                  </span>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-features-title font-small-header">Key Highlights</div>
                <ul className="project-bullets">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="project-bullet-item">{bullet}</li>
                  ))}
                </ul>

                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag-badge">{tag}</span>
                  ))}
                </div>

                <div className="project-mobile-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="mobile-link-btn">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg> Code
                  </a>
                  <a href={project.demo} className="mobile-link-btn">
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
