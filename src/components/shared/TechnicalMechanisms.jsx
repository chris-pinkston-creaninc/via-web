function TechnicalMechanisms({ variant = 'demo1' }) {
  return (
    <section className={`technical-mechanisms technical-mechanisms-${variant} py-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="section-title mb-4">Key Technical Mechanisms</h2>
            <ul className="mechanisms-list">
              <li><strong>RFID-tagged assets and bins</strong></li>
              <li><strong>Smart shelf positions</strong> map exact physical location</li>
              <li><strong>Devices send telemetry</strong> every few seconds</li>
              <li><strong>Routing engine updates WIP</strong> in real-time</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalMechanisms

