function WhoAndWhy({ variant = 'demo1' }) {
  return (
    <section className={`who-why-section who-why-section-${variant} py-5`}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className={`info-card info-card-${variant} h-100`}>
              <h3 className="section-title">
                <span className="text-primary">Who</span> It's For
              </h3>
              <hr className="section-divider mb-4" />
              <p>
                The VIA Smart Factory Operating System (SFOS)™ is ideal for U.S.-based, 
                small to medium-sized discrete manufacturers with high-mix production, 
                especially those in the DoD supply chain.
              </p>
              <p>
                Whether you have enterprise resource planning in place or not, the VIA Smart 
                Factory Operating System (SFOS)™ gives growing companies just what they need 
                to stay flexible while scaling fast and effectively through a lightweight solution. 
                Smart Factory also offers factory floor design and capacity optimization services 
                to help you streamline at a facility level.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={`info-card info-card-${variant} h-100`}>
              <h3 className="section-title">
                Our <span className="text-primary">Why</span>
              </h3>
              <hr className="section-divider mb-4" />
              <p>
                We know that small to medium-sized producers are the backbone of the U.S. supply 
                chain, as they're uniquely positioned to produce a high mix of parts and assemblies. 
                Some are the sole source of critical DoD parts.
              </p>
              <p>
                With this in mind, we want to ensure our domestic producers have the tools to 
                compete globally with larger producers already leveraging AI solutions to be more 
                competitive. VIA Smart Factory makes US suppliers competitive with anyone in the 
                world on cost, speed & quality; helping address critical national security 
                onshoring and supply chain challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoAndWhy

