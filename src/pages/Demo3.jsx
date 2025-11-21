import { useEffect } from 'react'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Hero from '../components/shared/Hero'
import ViaExplanation from '../components/shared/ViaExplanation'
import ProductSections from '../components/shared/ProductSections'
import TestimonialSection from '../components/shared/TestimonialSection'
import WhoAndWhy from '../components/shared/WhoAndWhy'
import AboutSection from '../components/shared/AboutSection'
import ContactForm from '../components/shared/ContactForm'
import ViaOverview from '../components/shared/ViaOverview'
import TechnicalArchitecture from '../components/shared/TechnicalArchitecture'
import TechnicalMechanisms from '../components/shared/TechnicalMechanisms'
import WipVisibility from '../components/shared/WipVisibility'
import SchedulingEngine from '../components/shared/SchedulingEngine'
import OperatorPov from '../components/shared/OperatorPov'
import CooPov from '../components/shared/CooPov'
import FloorDesign from '../components/shared/FloorDesign'
import ReducedWip from '../components/shared/ReducedWip'
import LearnMode from '../components/shared/LearnMode'
import ContactInfo from '../components/shared/ContactInfo'
import '../styles/demo3.css'

function Demo3() {
  useEffect(() => {
    document.body.className = 'demo3-body'
    return () => {
      document.body.className = ''
    }
  }, [])

  return (
    <div className="demo3">
      <Header variant="demo3" />
      
      <Hero variant="demo3" />
      
      <section className="intro-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="section-title mb-4">
                Integrating <span className="text-primary">People, Processes</span> and{' '}
                <span className="text-primary">Technology</span>
              </h2>
              <p className="lead">
                Transform complexity to simplicity in high-mix production. The{' '}
                <span className="text-primary">VIA Smart Factory Operating System (SFOS)™</span>{' '}
                provides comprehensive Visibility and real-time AI analytic Insights to Accelerate deliveries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ViaExplanation variant="demo3" />
      
      <section className="accelerator-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <p className="lead">
                The <span className="text-primary">VIA Production Accelerator</span> combines VIA 
                Smart Rack and Smart Bench hardware/sensors with{' '}
                <span className="text-primary">VIA's Smart Factory Operating System AI algorithm</span>{' '}
                to dynamically optimize high-mix production.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductSections variant="demo3" />
      <ViaOverview variant="demo3" />
      <TechnicalArchitecture variant="demo3" />
      <TechnicalMechanisms variant="demo3" />
      <WipVisibility variant="demo3" />
      <SchedulingEngine variant="demo3" />
      <OperatorPov variant="demo3" />
      <CooPov variant="demo3" />
      <FloorDesign variant="demo3" />
      <ReducedWip variant="demo3" />
      <LearnMode variant="demo3" />
      <TestimonialSection variant="demo3" />
      <WhoAndWhy variant="demo3" />
      <ContactInfo variant="demo3" />
      
      <section id="demo-form" className="form-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <AboutSection variant="demo3" />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title mb-4">
                Schedule a <span className="text-primary">Demo</span>
              </h2>
              <ContactForm variant="demo3" />
            </div>
          </div>
        </div>
      </section>

      <Footer variant="demo3" />
    </div>
  )
}

export default Demo3

