function ReducedWip({ variant = 'demo1' }) {
  return (
    <section className={`reduced-wip reduced-wip-${variant} py-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="section-title mb-4">Reduced WIP & Faster Throughput</h2>
            <ul className="wip-list">
              <li><strong>Digital traveler + real-time telemetry</strong> allow instantaneous visibility of bottlenecks.</li>
              <li><strong>Integrated vacuum/mag test cells</strong> prevent parts from piling up awaiting validation</li>
              <li><strong>Every subsystem moves in a forward-moving path:</strong> no backtracking, no U-turns.</li>
              <li><strong>Workstations are sequenced by cycle time</strong> to prevent queues and idle technicians.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReducedWip

