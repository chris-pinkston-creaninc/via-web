function ViaExplanation({ variant = 'demo1' }) {
  return (
    <section className={`via-explanation via-explanation-${variant} py-5`}>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 text-center">
            <h2 className="section-title mb-4">
              What does <span className="text-primary">VIA</span> mean?
            </h2>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className={`via-card via-card-${variant} h-100`}>
              <h3 className="via-title text-primary mb-3">Visibility:</h3>
              <p className="via-description">
                Track WIP location continuously with real-time alerts
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`via-card via-card-${variant} h-100`}>
              <h3 className="via-title text-primary mb-3">Insight:</h3>
              <p className="via-description">
                Dynamic process analytics aid in workflow improvements
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`via-card via-card-${variant} h-100`}>
              <h3 className="via-title text-primary mb-3">Accelerate:</h3>
              <p className="via-description">
                Reduced cycle time resulting in lower costs and higher profits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ViaExplanation

