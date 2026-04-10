import './NewHomepage.css'
import { Link } from 'react-router-dom'
import ImageSlideshow from '../components/ImageSlideshow'

function NewHomepage() {
  return (
    <div className="new-homepage">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text-block">
            <h1 className="hero-title">VISUAL<br />STORYTELLER</h1>
            <p className="hero-subtitle">Capturing moments that matter</p>
            <p className="hero-description">
              Freelance photographer specializing in sports, events & lifestyle photography
            </p>
            <Link to="/contact" className="cta-button">
              Book a Session
            </Link>
          </div>
          <div className="hero-image-block">
            <ImageSlideshow />
          </div>
        </div>
      </section>

      <section className="specialties-section">
        <h2 className="section-title">My Specialties</h2>
        <div className="specialties-grid">

          <div className="specialty-card sports">
            <div className="specialty-icon">⚽</div>
            <h3>Sports</h3>
            <p>Dynamic action shots capturing the intensity and energy of athletic moments</p>
            <Link to="/gallery/sports" className="specialty-link">Explore Work →</Link>
          </div>

          <div className="specialty-card events">
            <div className="specialty-icon">🎉</div>
            <h3>Events</h3>
            <p>Memorable celebrations documented with creativity and attention to detail</p>
            <Link to="/gallery/events" className="specialty-link">Explore Work →</Link>
          </div>

          <div className="specialty-card lifestyle">
            <div className="specialty-icon">✨</div>
            <h3>Lifestyle</h3>
            <p>Authentic portraits and lifestyle moments that tell your unique story</p>
            <Link to="/gallery/lifestyle" className="specialty-link">Explore Work →</Link>
          </div>

        </div>
      </section>

      <section className="about-preview-section">
        <div className="about-preview-content">
          <div className="about-text">
            <h2>Hi, I'm Izzy</h2>
            <p>
              I'm a passionate visual storyteller dedicated to capturing authentic moments 
              through my lens. Whether it's the thrill of sports, the joy of celebrations, 
              or the beauty of lifestyle photography, I bring creativity and technical 
              expertise to every project.
            </p>
            <p>
              As a freelance photographer, I'm committed to delivering stunning visuals 
              that resonate and inspire. Let's collaborate to bring your vision to life.
            </p>
            <Link to="/about" className="learn-more-link">Learn More About Me →</Link>
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <h2>Ready to Capture Your Moments?</h2>
        <p>Let's create something beautiful together</p>
        <Link to="/contact" className="cta-button primary">Get in Touch</Link>
      </section>
    </div>
  )
}

export default NewHomepage
