function OperatorPov({ variant = 'demo1' }) {
  return (
    <section className={`operator-pov operator-pov-${variant} py-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="section-title mb-4">Operator POV</h2>
            <div className={`pov-content pov-content-${variant}`}>
              <p className="lead mb-4">
                <strong>System tells them exactly what to work on</strong>
              </p>
              <ul className="pov-list">
                <li>Lights and instructions guide every step</li>
                <li>Zero searching, zero uncertainty</li>
                <li className="mt-3"><strong>Designed for execution</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OperatorPov

