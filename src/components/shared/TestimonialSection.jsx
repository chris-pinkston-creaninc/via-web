function TestimonialSection({ variant = 'demo1' }) {
  const scrollToForm = () => {
    const element = document.getElementById('demo-form')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={`testimonial-section testimonial-section-${variant} py-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h2 className="section-title mb-4">
              Our test case customer experienced a cycle reduction from{' '}
              <span className="text-primary">21 weeks to 7 weeks</span>, and a labor cost 
              per unit reduction of <span className="text-primary">more than 50 percent</span>.
            </h2>
            <p className="lead mb-4">
              See it in action– Contact us to schedule a demo.
            </p>
            <button className="btn btn-primary btn-lg" onClick={scrollToForm}>
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection

