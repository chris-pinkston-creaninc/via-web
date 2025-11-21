function FloorDesign({ variant = 'demo1' }) {
  return (
    <section className={`floor-design floor-design-${variant} py-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="section-title mb-4">Floor Design</h2>
            <p className="lead">
              Create a floor design where material, tasks, and technicians move with minimal friction and zero dead-zones.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FloorDesign

