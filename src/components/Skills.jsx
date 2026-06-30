import React from 'react';
import { Cpu, Database, Wrench, Sparkles, Code } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Skills.css';

export function Skills() {
  const [secRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  const featuredCategories = [
    {
      title: 'AI & Generative AI',
      icon: <Sparkles className="skill-cat-icon ai-sparkle" />,
      highlight: true,
      skills: [
        'Generative AI',
        'LLM Integration',
        'Prompt Engineering',
        'RAG (Retrieval-Augmented Gen)',
        'Model Context Protocol (MCP)',
        'AI Agents',
        'Spring AI'
      ]
    },
    {
      title: 'Backend & Frameworks',
      icon: <Cpu className="skill-cat-icon" />,
      skills: [
        'Spring Boot',
        'Spring Security',
        'Spring Data JPA',
        'RESTful APIs',
        'JWT Authentication',
        'Microservices (Basic)',
        'Apache Kafka',
        'Hibernate',
        'Servlets'
      ]
    }
  ];

  const supportCategories = [
    {
      title: 'Programming & Databases',
      icon: <Database className="skill-cat-icon" />,
      skills: [
        'Java (Core & OOPs)',
        'SQL',
        'JavaScript',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Redis'
      ]
    },
    {
      title: 'DevOps & Version Control',
      icon: <Wrench className="skill-cat-icon" />,
      skills: [
        'Docker',
        'Linux',
        'Git',
        'GitHub',
        'Maven'
      ]
    },
    {
      title: 'Core CS Concepts',
      icon: <Code className="skill-cat-icon" />,
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Operating Systems',
        'Computer Networks',
        'LeetCode (350+ Solved)'
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section" ref={secRef}>
      <div className={`container reveal ${isVisible ? 'active' : ''}`}>
        <div className="center-title">
          <span className="section-subtitle">Abilities & Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-layout">
          {/* Left Column: Core Focus areas */}
          <div className="skills-column core-focus">
            <h3 className="skills-col-title">Core Specializations</h3>
            <div className="skills-cards-list">
              {featuredCategories.map((cat, idx) => (
                <div 
                  key={idx} 
                  className={`skills-card glass-card ${cat.highlight ? 'highlighted-card' : ''}`}
                >
                  <div className="skills-card-header">
                    {cat.icon}
                    <h4 className="skills-card-title">{cat.title}</h4>
                  </div>
                  <div className="skills-list">
                    {cat.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className={`skill-tag ${cat.highlight ? 'ai-tag' : ''}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Foundation areas */}
          <div className="skills-column foundational">
            <h3 className="skills-col-title">Foundations & DevOps</h3>
            <div className="skills-cards-list">
              {supportCategories.map((cat, idx) => (
                <div 
                  key={idx} 
                  className="skills-card glass-card"
                >
                  <div className="skills-card-header">
                    {cat.icon}
                    <h4 className="skills-card-title">{cat.title}</h4>
                  </div>
                  <div className="skills-list">
                    {cat.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="skill-tag"
                      >
                        {skill}
                      </span>
                    ))}
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
