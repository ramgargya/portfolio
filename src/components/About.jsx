import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './About.css';

export function About() {
  const [secRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  return (
    <section id="about" className="about-section" ref={secRef}>
      <div className={`container reveal ${isVisible ? 'active' : ''}`}>
        <div className="center-title">
          <span className="section-subtitle">My Biography</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-info">
            <h3 className="about-heading">Hello, I'm Ram Sharma</h3>
            <p className="about-p">
              I'm a final-year Engineering student at <strong className="text-highlight">Ajay Kumar Garg Engineering College, Ghaziabad</strong>.
            </p>
            <p className="about-p">
              I am a <strong className="text-highlight">Java Backend Developer</strong> with hands-on experience in <strong className="text-highlight">Java, Spring Boot, Spring Security, RESTful APIs, Docker, Apache Kafka, Microservices (Basics)</strong>, and databases such as <strong className="text-highlight">MySQL, PostgreSQL, MongoDB, and Redis</strong>.
            </p>
            <p className="about-p">
              I have completed my <strong className="text-highlight">6 months of internship</strong> as a Java Backend Developer, where I worked on developing new features for a real-world consumer application. During this internship, I designed <strong className="text-highlight">REST APIs</strong>, integrated them with PostgreSQL databases, and implemented secure authentication using <strong className="text-highlight">JWT and Spring Security</strong>.
            </p>
            <p className="about-p">
              I also built projects such as <strong className="text-highlight">BiteBox</strong>, a food delivery platform, and a <strong className="text-highlight">Journal Entry Application</strong> to gain hands-on experience in <strong className="text-highlight">backend architecture, REST APIs, authentication, and database optimization</strong>.
            </p>
            <p className="about-p">
              Currently, I am learning <strong className="text-highlight">Generative AI and Spring AI</strong>, with a focus on <strong className="text-highlight">LLM integration, AI-powered applications, and prompt engineering</strong>.
            </p>
            <p className="about-p font-focus">
              I also regularly solve <strong className="text-highlight">Data Structures and Algorithms</strong> problems to improve my logical thinking and problem-solving skills.
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
