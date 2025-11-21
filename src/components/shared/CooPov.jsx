function CooPov({ variant = 'demo1' }) {
  return (
    <section className={`coo-pov coo-pov-${variant} py-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="section-title mb-4">Chief Operations Officer or Factory Owner POV</h2>
            <div className={`pov-content pov-content-${variant}`}>
              <ul className="pov-list">
                <li><strong>Real-time dashboard</strong> of WIP, bottlenecks, throughput</li>
                <li>Use learn mode to implement so <strong> units are on track or at risk of being behind schedule</strong></li>
                <li><strong>Every test step is recorded</strong></li>
                <li><strong>Data is traceable</strong> to the exact component, operator, and station in real time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CooPov

