function AboutSection({ variant = 'demo1' }) {
  return (
    <section className={`about-section about-section-${variant} py-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="section-title mb-4">
              About <span className="text-primary">Us</span>
            </h2>
            <hr className="section-divider mb-4" />
            <p>
              <a href="https://creaninc.com/smart-factory/" target="_blank" rel="noopener">
                <strong>Click here</strong>
              </a>{' '}
              to learn more about our aerospace parent company, CREAN Inc., and the expertise 
              behind VIA Smart Factory.
            </p>
            <p>
              There are opportunities to become a VIA Smart Factory Operating System channel 
              partner. Contact us for more information.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

