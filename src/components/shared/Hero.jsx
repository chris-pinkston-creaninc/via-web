function Hero({ variant = 'demo1' }) {
  const scrollToForm = () => {
    const element = document.getElementById('demo-form')
    if (element) {
      // Scroll to the top of the form section (full screen)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className={`hero hero-${variant}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 hero-content-wrapper">
            <h1 className="hero-title">
              <span className="hero-main-title">VIA Smart Factory</span>
              <br/><span className="text-primary hero-subtitle-text">A Live Digital Twin That Manages, Predicts, and Optimizes Your Factory</span>
            </h1>
            <div className="hero-cta mt-4">
              <button className="btn btn-primary btn-lg" onClick={scrollToForm}>
                Book a Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
