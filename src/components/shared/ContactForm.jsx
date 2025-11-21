import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../../config/emailjs'

function ContactForm({ variant = 'demo1' }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    industry: '',
    email: '',
    phone: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    // Check if EmailJS is configured
    if (emailjsConfig.publicKey === 'YOUR_PUBLIC_KEY' || 
        emailjsConfig.serviceId === 'YOUR_SERVICE_ID' || 
        emailjsConfig.templateId === 'YOUR_TEMPLATE_ID') {
      setSubmitError('Email service is not configured. Please set up EmailJS credentials.')
      setIsSubmitting(false)
      return
    }

    try {
      // Initialize EmailJS with public key
      emailjs.init(emailjsConfig.publicKey)

      // Prepare template parameters
      const templateParams = {
        to_email: emailjsConfig.toEmail,
        firstName: formData.firstName,
        lastName: formData.lastName,
        company: formData.company || 'Not provided',
        industry: formData.industry || 'Not provided',
        email: formData.email,
        phone: formData.phone || 'Not provided',
        from_name: `${formData.firstName} ${formData.lastName}`,
        message: `New demo request from ${formData.firstName} ${formData.lastName} (${formData.email})`
      }

      // Send email
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams
      )

      // Success
      setSubmitted(true)
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        industry: '',
        email: '',
        phone: ''
      })
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitError('Failed to send email. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className={`contact-form contact-form-${variant}`}>
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Thank you!</h4>
          <p>We've received your request. Our team will contact you shortly.</p>
        </div>
      </div>
    )
  }

  return (
    <form className={`contact-form contact-form-${variant}`} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="company" className="form-label">Company</label>
          <input
            type="text"
            className="form-control"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="industry" className="form-label">Industry</label>
          <input
            type="text"
            className="form-control"
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="form-label">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      {submitError && (
        <div className="alert alert-danger" role="alert">
          {submitError}
        </div>
      )}
      <div className="text-center mt-4">
        <button 
          type="submit" 
          className="btn btn-primary btn-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Sending...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </div>
    </form>
  )
}

export default ContactForm

