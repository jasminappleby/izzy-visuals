import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion'
import './FAQ.css'

function FAQ() {
  const faqItems = [
    {
      id: 'how-to-book',
      title: 'How do I book?',
      content: 'Simply fill out our contact form on the Contact page with your event details, preferred date, and location. Send your enquiry and I\'ll get back to you within 48 hours to discuss availability and finalise the booking.'
    },
    {
      id: 'response-time',
      title: 'What\'s your response time?',
      content: 'I aim to respond to all enquiries within 48 hours. During peak seasons, it may take up to 72 hours. You\'ll receive a confirmation email as soon as I\'ve reviewed your enquiry.'
    },
    {
      id: 'pricing',
      title: 'What\'s your pricing?',
      content: 'Pricing varies depending on the type of photography, event duration, and location. I offer custom packages tailored to your specific needs. Contact me for a personalized quote.'
    },
    {
      id: 'number-of-pics',
      title: 'How many pictures will I receive?',
      content: 'The number of photos depends on your package and event duration. Typically, events include XXX edited photos. We\'ll discuss the specifics during our consultation to ensure you know exactly what to expect.'
    },
    {
      id: 'editing',
      title: 'Will you edit my pictures?',
      content: 'Yes! All photos are professionally edited to enhance colors, lighting, and overall quality. I ensure a consistent style across all your images while maintaining natural results.'
    },
    {
      id: 'delivery-time',
      title: 'How soon will I receive my pictures?',
      content: 'You can typically expect your edited photos within 2-4 weeks of your event. This allows time for professional editing and quality assurance. If you need your photos faster than this, please let me know and we can discuss this further.'
    },
    {
      id: 'delivery-method',
      title: 'How do you deliver?',
      content: 'Photos are delivered via a secure online gallery where you can preview, download, and share them. You\'ll also receive a backup on a USB drive for an additional fee, if requested.'
    },
    {
      id: 'payment',
      title: 'How do you take payment?',
      content: 'I accept bank transfer payments. A deposit is typically required to secure your booking, with the final payment due before the event.'
    },
    {
      id: 'advance-booking',
      title: 'How far in advance do I need to book?',
      content: 'I recommend booking at least 4-6 weeks in advance to ensure availability. However, I\'ll do my best to accommodate closer bookings if my schedule allows. The sooner you book, the better I can prepare for your event.'
    },
    {
      id: 'travel',
      title: 'Do you travel?',
      content: 'Yes, I travel locally and can discuss travel to destinations further away. Travel expenses may be included depending on distance. Let me know your location and we\'ll work out the details.'
    },
    {
      id: 'deposit',
      title: 'What\'s your deposit policy?',
      content: 'A deposit of XX% is required to secure your booking. This confirms your date and location. The remaining balance is due 7 days before your event. The deposit is non-refundable but transferable to another date within one year.'
    },
  ]

  return (
    <div className="page-content">
      <h1 style={{fontSize: '50px', textAlign:'center'}}>Frequently Asked Questions</h1>
      <p className="faq-intro">Find answers to common questions about booking, pricing, and our services.</p>
      
      <Accordion items={faqItems} allowMultiple={true} />

      <div className="faq-footer">
        <p>Still have questions? <Link to="/contact">Contact us directly</Link> and I'll be happy to help!</p>
      </div>
    </div>
  )
}

export default FAQ
