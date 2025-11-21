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
import '../styles/demo1.css'

function Demo1() {
  useEffect(() => {
    document.body.className = 'demo1-body'
    return () => {
      document.body.className = ''
    }
  }, [])

  return (
    <div className="demo1">
      <Header variant="demo1" />
      
     

      <Hero variant="demo1" />
      <ViaExplanation variant="demo1" />
      
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

      <ProductSections variant="demo1" />
      <ViaOverview variant="demo1" />
      <TechnicalArchitecture variant="demo1" />
      <TechnicalMechanisms variant="demo1" />
      <WipVisibility variant="demo1" />
      <SchedulingEngine variant="demo1" />
      <OperatorPov variant="demo1" />
      <CooPov variant="demo1" />
      <FloorDesign variant="demo1" />
      <ReducedWip variant="demo1" />
      <LearnMode variant="demo1" />
      <TestimonialSection variant="demo1" />
      <WhoAndWhy variant="demo1" />
      <ContactInfo variant="demo1" />
      
      <section id="demo-form" className="form-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <AboutSection variant="demo1" />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title mb-4">
                Schedule a <span className="text-primary">Demo</span>
              </h2>
              <ContactForm variant="demo1" />
            </div>
          </div>
        </div>
      </section>

      <Footer variant="demo1" />
    </div>
  )
}

export default Demo1

