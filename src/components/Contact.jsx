import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Contact.css';

export function Contact() {
  const [secRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  // FORM STATES
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: null, // 'success' | 'error' | 'loading'
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, Message).'
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending message...' });

    // If key is not configured, simulate submission for demo purposes & prompt user
    if (WEB3FORMS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      setTimeout(() => {
        setStatus({
          type: 'success',
          message: 'Message simulated successfully! To receive emails at ramkrsharm2005@gmail.com, please update the WEB3FORMS_KEY variable in Contact.jsx.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Portfolio Message',
          message: formData.message,
          from_name: 'Portfolio Contact Form'
        })
      });

      const result = await response.json();

      if (response.status === 200 || result.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: result.message || 'Something went wrong. Please try again or email me directly.'
        });
      }
    } catch (error) {
      console.error('Contact Form Error:', error);
      setStatus({
        type: 'error',
        message: 'Unable to connect. Please check your network or email me directly.'
      });
    }
  };

  return (
    <section id="contact" className="contact-section" ref={secRef}>
      <div className={`container reveal ${isVisible ? 'active' : ''}`}>
        <div className="center-title">
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-grid">
          {/* Contact Information cards */}
          <div className="contact-info-panel">
            <h3 className="contact-heading">Let's discuss your next project</h3>
            <p className="contact-p">
              I am open to SDE roles, internship opportunities, or interesting freelance collaborations. Drop me a message through the form, or reach out directly via email or phone.
            </p>

            <div className="contact-cards-container">
              <div className="contact-detail-card glass-card">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-label">Email Me</span>
                  <a href="mailto:ramkrsharm2005@gmail.com" className="contact-value-link">
                    ramkrsharm2005@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-card glass-card">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-label">Call / WhatsApp</span>
                  <a href="tel:+917983496881" className="contact-value-link">
                    +91-7983496881
                  </a>
                </div>
              </div>

              <div className="contact-detail-card glass-card">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Noida, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>


          </div>

          {/* Contact Form */}
          <div className="contact-form-panel glass-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>

              {status.type && (
                <div className={`form-status-alert ${status.type}`}>
                  {status.type === 'success' && <CheckCircle2 size={18} className="alert-icon" />}
                  {status.type === 'error' && <AlertCircle size={18} className="alert-icon" />}
                  <span className="status-msg">{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                className="btn-primary form-submit-btn"
                disabled={status.type === 'loading'}
              >
                {status.type === 'loading' ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
