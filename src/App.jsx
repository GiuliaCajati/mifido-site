import './App.css'
import brandMark from './assets/mifido-brand.svg'

function App() {
  const appStoreUrl = 'https://apps.apple.com/us/app/mifido-trust-your-anchor/id6756627879'

  const features = [
    {
      title: 'Guided recordings',
      description: 'Soft audio practices that help you shift your state and return to yourself.'
    },
    {
      title: 'Inner Glow cards',
      description: 'Gentle visual resets: color and imagery to settle your nervous system.'
    },
    {
      title: 'Journaling prompts',
      description: 'Thoughtful prompts to help you hear your own voice more clearly.'
    },
    {
      title: 'Gentle structure',
      description: 'A supportive rhythm that keeps you moving without pressure.'
    }
  ]

  const weeks = [
    {
      number: 1,
      title: 'Regulate',
      description: 'begin with calm and safety'
    },
    {
      number: 2,
      title: 'Reconnect',
      description: 'explore your authentic self and values'
    },
    {
      number: 3,
      title: 'Reset',
      description: 'deepen inner safety and steadiness'
    },
    {
      number: 4,
      title: 'Reveal',
      description: 'notice what you\'ve been dimming'
    },
    {
      number: 5,
      title: 'Redesign',
      description: 'build a life that feels like you'
    }
  ]

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <img src={brandMark} alt="MiFido" className="brand-mark" />
          <h1 className="hero-headline">Trust your anchor.</h1>
          <h2 className="hero-subheadline">Let the noise drift.</h2>
          <p className="hero-body">
            MiFido is a gentle space to come back to yourself—through breathwork, journaling, 
            and small daily practices that build self-trust.
          </p>
          <a 
            href={appStoreUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button"
          >
            Download on the App Store
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <article key={index} className="feature-card">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey">
        <div className="container">
          <h2 className="journey-title">A gentle 5-week journey</h2>
          <p className="journey-intro">
            Each week opens the next—soft structure, steady support, and space to grow at your own pace.
          </p>
          <div className="journey-stepper">
            {weeks.map((week, index) => (
              <article key={week.number} className="week-step">
                <div className="week-number">Week {week.number}</div>
                <h3 className="week-title">{week.title}</h3>
                <p className="week-description">{week.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="download">
        <div className="container">
          <p className="download-text">MiFido is here whenever you want to come back.</p>
          <a 
            href={appStoreUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button"
          >
            Download on the App Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © MiFido · <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">Download</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
