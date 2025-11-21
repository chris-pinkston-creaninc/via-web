function LearnMode({ variant = 'demo1' }) {
  return (
    <section className={`learn-mode learn-mode-${variant} py-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h2 className="section-title mb-4">VIA Smart Factory's "Learn Mode" Adapts to Future Markets</h2>
            <p className="lead">
              Via's <strong>'Learn mode'</strong> adapts to changes in work orders and production so manufacturers 
              autonomously gets the visualization, acceleration, and Insight to expand and conquer future markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearnMode

