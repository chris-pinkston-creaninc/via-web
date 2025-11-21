function WipVisibility({ variant = 'demo1' }) {
  const inputs = [
    'Due date, slack time, priority category (DoD Dx/Do/critical)',
    'Station capability & availability',
    'Technician skills & load',
    'Routing complexity',
    'Floor congestion',
    'Historical takt/cycle times',
    'Queue length',
    'Material constraints'
  ]

  const outputs = [
    'The next best part to build',
    'How work should be sequenced',
    'Optimal station assignments',
    'Bottleneck prediction & load balancing',
    'Real-time flow optimization'
  ]

  return (
    <section className={`wip-visibility wip-visibility-${variant} py-5`}>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 text-center">
            <h2 className="section-title mb-4">Autonomous & Real Time WIP Visibility</h2>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className={`info-box info-box-${variant} h-100`}>
              <h3 className="info-box-title">Scheduling Logic Inputs:</h3>
              <ul className="info-box-list">
                {inputs.map((input, index) => (
                  <li key={index}>{input}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={`info-box info-box-${variant} h-100`}>
              <h3 className="info-box-title">Engine Outputs:</h3>
              <ul className="info-box-list">
                {outputs.map((output, index) => (
                  <li key={index}>{output}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WipVisibility

