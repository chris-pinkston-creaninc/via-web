function ContactInfo({ variant = 'demo1' }) {
  return (
    <section className={`contact-info contact-info-${variant} py-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="section-title mb-4 text-center">Contact Information</h2>
            <div className="row g-4">
              <div className="col-md-6">
                <div className={`contact-card contact-card-${variant} h-100`}>
                  <h4 className="contact-name">Jennifer Crean</h4>
                  <p className="contact-title">CEO</p>
                  <p className="contact-email">
                    <a href="mailto:Jenn@creaninc.com">Jenn@creaninc.com</a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`contact-card contact-card-${variant} h-100`}>
                  <h4 className="contact-name">James Crean</h4>
                  <p className="contact-title">President</p>
                  <p className="contact-email">
                    <a href="mailto:James@creaninc.com">James@creaninc.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="contact-phone">
                <strong>Phone:</strong>{' '}
                <a href="tel:512-337-6587">512-337-6587</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo

