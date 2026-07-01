import React from 'react';
import { Calendar, MapPin, CheckCircle2, Activity, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Experience.css';

export function Experience() {
  const [secRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  const experiences = [
    {
      role: 'AI Content Trainee & Prompt Engineer',
      company: 'Physics Wallah',
      location: 'Noida, India (Remote)',
      period: 'May 2026 – Present',
      project: 'AI-Powered Educational Content Gen',
      domain: 'EdTech & Generative AI',
      skills: 'Prompt Engineering, LLMs (GPT/Claude), System Prompt Design, Content Structuring',
      accomplishments: [
        'Designed and optimized robust system prompts for educational AI agents, enhancing learning materials clarity and prompt efficiency.',
        'Evaluated LLM responses and structured outputs to align with strict academic guidelines and tone specifications.'
      ],
      highlights: [
        { label: 'Prompt Efficiency', value: '+40%', icon: <Zap size={18} /> },
        { label: 'Accuracy Rating', value: '98%', icon: <Activity size={18} /> }
      ],
      year: '2026'
    },
    {
      role: 'SDE Intern',
      company: 'Stakrid Logistics',
      location: 'Noida, India',
      period: 'Aug 2025 – Feb 2026',
      project: 'Consumer Application',
      domain: 'Logistics',
      skills: 'Java, Spring Boot, Spring Security, PostgreSQL, Git & GitHub',
      accomplishments: [
        'Built and launched a new Consumer Module using Java and Spring Boot, supporting scalable backend operations for end users.',
        'Designed and maintained 12+ RESTful APIs for Consumer and Cart modules, improving data flow and application performance.'
      ],
      highlights: [
        { label: 'REST APIs', value: '12+', icon: <Activity size={18} /> },
        { label: 'Code Redundancy', value: '-30%', icon: <Zap size={18} /> }
      ],
      year: '2025'
    }
  ];

  return (
    <section id="experience" className="experience-section" ref={secRef}>
      <div className={`container reveal ${isVisible ? 'active' : ''}`}>
        <div className="center-title">
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="experience-timeline-container">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, idx) => (
            <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left-side' : 'right-side'}`}>
              <div className="timeline-badge">
                <span className="timeline-badge-year">{exp.year}</span>
              </div>
              
              <div className="experience-card-wrapper">
                <div className="experience-header glass-card">
                  <div className="experience-title-area">
                    <div className="role-company">
                      <h3 className="exp-role">{exp.role}</h3>
                      <span className="exp-company">{exp.company}</span>
                    </div>
                    <div className="exp-meta">
                      <span className="exp-meta-item">
                        <Calendar size={14} /> {exp.period}
                      </span>
                      <span className="exp-meta-item">
                        <MapPin size={14} /> {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  <div className="exp-domain">
                    <div style={{ marginBottom: '0.25rem' }}><strong>Project:</strong> {exp.project}</div>
                    <div style={{ marginBottom: '0.25rem' }}><strong>Domain:</strong> {exp.domain}</div>
                    <div><strong>Skills:</strong> {exp.skills}</div>
                  </div>

                  {/* Key Performance Indicators/Highlights */}
                  <div className="experience-highlights">
                    {exp.highlights.map((hl, hlIdx) => (
                      <div key={hlIdx} className="highlight-item glass-card">
                        <div className="hl-icon-val">
                          <span className="hl-icon">{hl.icon}</span>
                          <span className="hl-value">{hl.value}</span>
                        </div>
                        <span className="hl-label">{hl.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="accomplishments-list">
                    {exp.accomplishments.map((acc, accIdx) => (
                      <div key={accIdx} className="accomplishment-item">
                        <CheckCircle2 className="acc-check-icon" />
                        <p className="acc-text">{acc}</p>
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
