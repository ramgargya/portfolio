import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './About.css';

export function About() {
  const [secRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  return (
    <section id="about" className="about-section" ref={secRef}>
      <div className={`container reveal ${isVisible ? 'active' : ''}`}>
        <div className="center-title">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-info">
            <h3 className="about-heading">Hello, I'm Ram Sharma</h3>
            <p className="about-p">
              I'm a final-year Engineering student at <strong className="text-highlight">Ajay Kumar Garg Engineering College, Ghaziabad</strong>. As a <strong className="text-highlight">Java Backend Developer</strong>, my core tech stack includes <strong className="text-highlight">Java, Spring Boot, Spring Security, RESTful APIs, Docker, Apache Kafka, Microservices (Basics)</strong>, alongside databases like <strong className="text-highlight">MySQL, PostgreSQL, MongoDB, and Redis</strong>.
            </p>
            <p className="about-p">
              During my <strong className="text-highlight">6 months of internship</strong>, I built new features for a consumer app by designing <strong className="text-highlight">REST APIs</strong> and configuring secure authentication with <strong className="text-highlight">JWT and Spring Security</strong>. I also developed projects like <strong className="text-highlight">BiteBox</strong> and a <strong className="text-highlight">Journal Entry Application</strong> to master <strong className="text-highlight">backend architecture, REST APIs, authentication, and database optimization</strong>.
            </p>
            <p className="about-p">
              Currently, I am diving into <strong className="text-highlight">Generative AI and Spring AI</strong>, focusing on <strong className="text-highlight">LLM integration, AI-powered applications, and prompt engineering</strong>. To keep my logical thinking sharp, I regularly solve <strong className="text-highlight">Data Structures and Algorithms</strong> problems.
            </p>
          </div>

          <div className="about-portrait-visual">
            <div className="portrait-frame-outer">
              <div className="portrait-frame-inner">
                <img 
                  src="/assets/portrait.jpg" 
                  alt="Ram Sharma Portrait" 
                  className="about-portrait"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80'; // fallback
                  }}
                />
              </div>
              <div className="glowing-border cyan"></div>
              <div className="glowing-border indigo"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
