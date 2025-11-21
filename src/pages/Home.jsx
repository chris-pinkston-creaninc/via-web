import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import '../styles/home.css'

function Home() {
  useEffect(() => {
    document.body.className = 'home-body'
    return () => {
      document.body.className = ''
    }
  }, [])

  const demos = [
    {
      id: 1,
      title: 'Modern Minimal',
      subtitle: 'Clean & Elegant',
      description: 'Clean, minimal design with product-focused emphasis',
      route: '/demo-1',
      features: ['Light theme', 'Card layouts', 'Product showcase', 'Smooth animations'],
      gradient: 'linear-gradient(135deg,rgb(30, 127, 225) 0%, #e9ecef 100%)',
      accent: '#4681a8'
    },
    {
      id: 2,
      title: 'Bold Tech-Focused',
      subtitle: 'AI-Powered',
      description: 'Bold design emphasizing AI and technology capabilities',
      route: '/demo-2',
      features: ['Dark theme', 'Tech-forward UI', 'AI features', 'Interactive elements'],
      gradient: 'linear-gradient(135deg,rgb(115, 17, 168) 0%, #1d2c67 100%)',
      accent: '#5ba3d4'
    },
    {
      id: 3,
      title: 'Classic Professional',
      subtitle: 'Enterprise Ready',
      description: 'Traditional, trustworthy design focused on business value',
      route: '/demo-3',
      features: ['Professional theme', 'Business focus', 'ROI emphasis', 'Corporate style'],
      gradient: 'linear-gradient(135deg,rgb(220, 150, 45) 0%, #2a3f7a 100%)',
      accent: '#4681a8'
    }
  ]

  return (
    <div className="home-page">
      <Header variant="demo1" />
      
      <section className="home-hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="hero-content">
                <h1 className="hero-title">
                  VIA Smart Factory
                  <span className="hero-subtitle">Potential website examples</span>
                </h1>
                <p className="hero-description">
                  Explore three distinct design approaches, each showcasing unique style and feature emphasis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="demos-section">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {demos.map((demo, index) => (
              <div key={demo.id} className="col-lg-4 col-md-6">
                <Link to={demo.route} className="demo-card-link">
                  <div 
                    className="demo-card"
                    style={{ '--card-gradient': demo.gradient, '--card-accent': demo.accent }}
                    data-index={index}
                  >
                    <div className="demo-card-header">
                      <div className="demo-number">0{demo.id}</div>
                      <div className="demo-badge">{demo.subtitle}</div>
                    </div>
                    <div className="demo-card-body">
                      <h3 className="demo-card-title">{demo.title}</h3>
                      <p className="demo-card-description">{demo.description}</p>
                      <ul className="demo-features">
                        {demo.features.map((feature, idx) => (
                          <li key={idx}>
                            <span className="feature-icon">→</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="demo-card-footer">
                      <span className="demo-link-text">
                        View Demo <span className="arrow">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="factory3d-cta-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="factory3d-cta-title">Explore Our 3D Factory</h2>
              <p className="factory3d-cta-description">
                Experience an interactive 3D visualization of a smart factory floor
              </p>
              <Link to="/factory-3d" className="factory3d-cta-button">
                View 3D Factory
                <span className="button-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-footer-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <p className="footer-note">
                All demos include the same comprehensive content with different design approaches
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="demo1" />
    </div>
  )
}

export default Home
