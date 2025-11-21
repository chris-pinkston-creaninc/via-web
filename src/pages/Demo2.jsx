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
import '../styles/demo2.css'

function Demo2() {
  useEffect(() => {
    document.body.className = 'demo2-body'
    return () => {
      document.body.className = ''
    }
  }, [])

  return (
    <div className="demo2">
      <Header variant="demo2" />
      
      <Hero variant="demo2" />
      
      <section className="intro-section py-5">
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

      <ViaExplanation variant="demo2" />
      
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

      <ProductSections variant="demo2" />
      <ViaOverview variant="demo2" />
      <TechnicalArchitecture variant="demo2" />
      <TechnicalMechanisms variant="demo2" />
      <WipVisibility variant="demo2" />
      <SchedulingEngine variant="demo2" />
      <OperatorPov variant="demo2" />
      <CooPov variant="demo2" />
      <FloorDesign variant="demo2" />
      <ReducedWip variant="demo2" />
      <LearnMode variant="demo2" />
      <TestimonialSection variant="demo2" />
      <WhoAndWhy variant="demo2" />
      <ContactInfo variant="demo2" />
      
      <section id="demo-form" className="form-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <AboutSection variant="demo2" />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title mb-4">
                Schedule a <span className="text-primary">Demo</span>
              </h2>
              <ContactForm variant="demo2" />
            </div>
          </div>
        </div>
      </section>

      <Footer variant="demo2" />
    </div>
  )
}

export default Demo2

