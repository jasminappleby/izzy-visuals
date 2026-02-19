import { Link } from 'react-router-dom'
import './SiteMap.css'

function SiteMap() {
  return (
    <div className="page-content">
      <div className="sitemap">
        <h1>Site Map</h1>
        
        <div className="sitemap-grid">
          <div className="sitemap-section">
            <h2>Main Pages</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>

          <div className="sitemap-section">
            <h2>Portfolio</h2>
            <h3><Link to="/gallery">Gallery</Link></h3>
            <ul>
              <li><Link to="/gallery/events">Events</Link></li>
                  <ul className="subsection">
                    <li><Link to="/gallery/events/birthdays">Birthdays</Link></li>
                    <li><Link to="/gallery/events/nightlife">Nightlife</Link></li>
                  </ul>
              <li>
                <h3><Link to="/gallery/sports">Sports</Link></h3>
                <ul className="subsection">
                  <li><Link to="/gallery/sports/rugby">Rugby</Link></li>
                </ul>
              </li>
              <li><Link to="/gallery/lifestyle">Lifestyle</Link></li>
                <ul className="subsection">
                  <li><Link to="/gallery/lifestyle/graduation">Graduation</Link></li>
                  <li><Link to="/gallery/lifestyle/portraits">Portraits</Link></li>
                </ul>
            </ul>
          </div>

          <div className="sitemap-section">
            <h2>Resources</h2>
            <ul>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/contact/faq">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteMap
