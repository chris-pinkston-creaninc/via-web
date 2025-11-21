import { Link } from 'react-router-dom'

function Footer({ variant = 'demo1' }) {
  return (
    <footer className={`footer footer-${variant}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <div className="footer-logo-text" style={{ display: 'none' }}>VIA Smart Factory</div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="row">
          <div className="col-12 text-center">
            <div className="social-links mb-3">
              <a 
                href="https://www.linkedin.com/company/creaninc/" 
                target="_blank" 
                rel="noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"></path>
                  <path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"></path>
                </svg>
              </a>
            </div>
            <p className="footer-text">
              © VIA Smart Factory. All rights reserved.{' '}
              <a href="https://creaninc.com/terms-of-use/" target="_blank" rel="noopener">Terms of Use</a> |{' '}
              <a href="https://creaninc.com/privacy-policy/" target="_blank" rel="noopener">Privacy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

