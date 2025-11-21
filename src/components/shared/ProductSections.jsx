function ProductSections({ variant = 'demo1' }) {
  return (
    <>
      <section className={`product-section product-section-${variant} py-5`}>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 className="section-title mb-4">Smart Rack/Smart Bench</h2>
              <hr className="section-divider mb-4" />
              <ul className="product-features">
                <li>LED Lights Indicate What to Work on Next</li>
                <li>Operator Performance Feedback</li>
                <li>Process Duration Analytics</li>
                <li>Adaptable to Any Size Products</li>
              </ul>
            </div>
            <div className="col-lg-6 text-center">
              <img 
                src="/SmartRack01-1-0256366f.webp" 
                alt="Smart Rack/Smart Bench" 
                className="product-image img-fluid"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`product-section product-section-${variant} py-5`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <h2 className="section-title mb-4">
                Smart Factory <br />Operating System
              </h2>
              <hr className="section-divider mb-4" />
              <ul className="product-features">
                <li>Real-Time Operational Visibility and Reporting</li>
                <li>Notifications and Alerts to Phone or Computer</li>
                <li>Visibility, Insight & Acceleration (VIA)</li>
              </ul>
              <p className="mt-4">
                Tracking WIP from kit to delivery, SFOS™ uses AI & VIA Smart Queue Sequencing 
                to prioritize what should be worked on next to prevent bottlenecks, create 
                operational efficiencies, and deliver products on time, resulting in improved profits.
              </p>
            </div>
            <div className="col-lg-6 order-lg-1 text-center">
              <img 
                src="/dashboard.png" 
                alt="Smart Factory Operating System Dashboard" 
                className="product-image img-fluid"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductSections

