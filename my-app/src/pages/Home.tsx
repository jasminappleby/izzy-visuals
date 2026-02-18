import './Home.css'
import ImageCarousel from '../components/ImageCarousel'

function Home() {
  const portfolioImages = [
    '/images/sports/rugby/rugby-2.JPG',
    '/images/sports/rugby/rugby-3.JPG',
    '/images/sports/rugby/rugby-6.JPG',
    '/images/sports/rugby/rugby-13.JPG',
    '/images/sports/rugby/rugby-10.JPG',
  ]

  return (
    <div className="home-no-padding">
      <ImageCarousel images={portfolioImages} />
    </div>
  )
}

export default Home
