import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import './Contact.css'

function Contact() {
  const location = useLocation()
  const isSubPage = location.pathname !== '/contact'

  if (isSubPage) {
    return <Outlet />
  }

  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    interested: '',
    proposedDate: '',
    location: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    
    // Validate required fields
    if (!formData.firstName || !formData.email || !formData.interested || !formData.proposedDate || !formData.location || !formData.message) {
      alert('Please fill in all required fields')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send enquiry')
      }

      // Reset form
      setFormData({
        firstName: '',
        surname: '',
        email: '',
        interested: '',
        proposedDate: '',
        location: '',
        message: '',
      })
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      setError('Failed to send your enquiry. Please try again.')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page-content">
      <h1 style={{fontSize: '50px', textAlign:'center'}}>Contact Me</h1>

      <br/>
      <div className="faq-prompt">
        <p>Have questions? <a href="/contact/faq">Check out our FAQs</a> to learn more about how we work!</p>
      </div>
      
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          {submitted && <div className="success-message">Thank you! Your enquiry has been sent successfully.</div>}
          {error && <div className="error-message" style={{color: 'red', marginBottom: '20px', padding: '10px', backgroundColor: '#ffe6e6', borderRadius: '4px'}}>{error}</div>}
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Your first name" required />
            </div>

            <div className="form-group">
              <label htmlFor="surname">Surname *</label>
              <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} placeholder="Your surname" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="interested">I am interested in *</label>
            <select
              id="interested"
              name="interested"
              value={formData.interested}
              onChange={handleChange}
              required
            >
              <option value="">Select a photography type...</option>
              <option value="Sports">Sports</option>
              <option value="Portraits">Portraits</option>
              <option value="Events">Events</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="proposedDate">Proposed Date *</label>
            <input
              type="date"
              id="proposedDate"
              name="proposedDate"
              value={formData.proposedDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Event Location *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Where will the event take place?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your event, your vision, or any specific requirements..."
              required
              rows={5}
            />
          </div>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Sending...' : 'Send Enquiry'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
