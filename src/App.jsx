import React from 'react';
import appIcon from './assets/app_icon.png';

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Trust your anchor. Let the noise drift.</h1>
          <p className="hero-body">
            MiFido helps you find calm in the chaos. Through gentle guidance and mindful practices, 
            discover your inner anchor and let life's noise drift away naturally.
          </p>
          <div className="brand-image-container">
            <img src={appIcon} alt="MiFido App Icon" className="brand-image" />
          </div>
          <a 
            href="https://apps.apple.com/us/app/mifido-trust-your-anchor/id6756627879" 
            className="app-store-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="apple-logo" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Download on the App Store
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Your Wellness Companion</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎙️</div>
              <h3 className="feature-title">Recordings</h3>
              <p className="feature-description">
                Capture your thoughts and feelings with guided voice recordings that help you process emotions.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3 className="feature-title">Glow</h3>
              <p className="feature-description">
                Experience gentle visual feedback that reflects your emotional state and progress.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3 className="feature-title">Journaling</h3>
              <p className="feature-description">
                Write your way to clarity with thoughtful prompts designed for self-discovery.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏗️</div>
              <h3 className="feature-title">Structure</h3>
              <p className="feature-description">
                Build lasting habits with a framework that guides you gently toward wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Week Journey Section */}
      <section className="journey">
        <div className="container">
          <h2 className="section-title">Your 5-Week Journey</h2>
          <p className="journey-intro">
            Transform your relationship with yourself through five gentle phases of growth.
          </p>
          <div className="journey-timeline">
            <div className="journey-phase">
              <div className="phase-number">1</div>
              <h3 className="phase-title">Regulate</h3>
              <p className="phase-description">
                Learn to recognize and calm your nervous system, creating a foundation of safety.
              </p>
            </div>
            <div className="journey-arrow">→</div>
            <div className="journey-phase">
              <div className="phase-number">2</div>
              <h3 className="phase-title">Reconnect</h3>
              <p className="phase-description">
                Rebuild trust with yourself by tuning into your body's wisdom and signals.
              </p>
            </div>
            <div className="journey-arrow">→</div>
            <div className="journey-phase">
              <div className="phase-number">3</div>
              <h3 className="phase-title">Reset</h3>
              <p className="phase-description">
                Release patterns that no longer serve you and create space for new growth.
              </p>
            </div>
            <div className="journey-arrow">→</div>
            <div className="journey-phase">
              <div className="phase-number">4</div>
              <h3 className="phase-title">Reveal</h3>
              <p className="phase-description">
                Discover your authentic self beneath layers of conditioning and adaptation.
              </p>
            </div>
            <div className="journey-arrow">→</div>
            <div className="journey-phase">
              <div className="phase-number">5</div>
              <h3 className="phase-title">Redesign</h3>
              <p className="phase-description">
                Create a life aligned with your true values and deepest desires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">© 2024 MiFido. Your journey to inner peace.</p>
          <p className="footer-tagline">Trust your anchor. Let the noise drift.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
