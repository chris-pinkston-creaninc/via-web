function ViaOverview({ variant = 'demo1' }) {
  return (
    <section className={`via-overview via-overview-${variant} py-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="overview-content">
              <p className="lead mb-4">
                <strong>VIA</strong> is a real-time, IoT-integrated manufacturing execution and scheduling system
              </p>
              <ul className="overview-list">
                <li>Built from <strong>20+ years</strong> of Crean factory design, digital transformation, and DoD/NASA aerospace manufacturing experience</li>
                <li>Provides <strong>end-to-end orchestration</strong> across materials, WIP, routing, scheduling, traceability, QA, and production analytics</li>
                <li>Enables <strong>synchronous flow manufacturing</strong>—required for high-scale propulsion system builds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ViaOverview

