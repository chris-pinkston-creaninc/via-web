function TechnicalArchitecture({ variant = 'demo1' }) {
  const layers = [
    {
      title: 'Sensors & IoT layer',
      items: ['RFID, SmartBins, pick-to-light modules, workstation telemetry']
    },
    {
      title: 'Data ingestion layer',
      items: ['Industry standard protocols for event stream processors and device state monitoring']
    },
    {
      title: 'Real-time decision engine',
      items: ['Priority algorithms (slack time, complexity, due dates), throughput optimization']
    },
    {
      title: 'Workflow engine',
      items: ['Routing logic, workstation sequencing, automated instructions']
    },
    {
      title: 'Digital thread & configs',
      items: ['Work instructions, ECNs, build configurations, QA requirements']
    },
    {
      title: 'Visualization layer',
      items: ['Live WIP map, operator dashboards, supervisor console, analytics']
    },
    {
      title: 'APIs',
      items: ['CAD/PLM, MES/MRP, ERP, quality systems, test equipment']
    },
    {
      title: 'Audit & traceability',
      items: ['Complete provenance for every component and assembly']
    }
  ]

  return (
    <section className={`technical-architecture technical-architecture-${variant} py-5`}>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 text-center">
            <h2 className="section-title mb-4">Technical Architecture</h2>
          </div>
        </div>
        <div className="row g-4">
          {layers.map((layer, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className={`architecture-card architecture-card-${variant} h-100`}>
                <h4 className="card-title">{layer.title}:</h4>
                <ul className="architecture-list">
                  {layer.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalArchitecture

