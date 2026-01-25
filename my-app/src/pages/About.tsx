import './About.css'

function About() {
  return (
    <div className="page-content">
      <h1 style={{fontSize: '50px', textAlign:'center'}}>About Me</h1>
        <div className="paragraph-1" style={{ textAlign: 'center' }}>
          <img src="/images/landscape-placeholder.jpg" alt="placeholder image" style={{ maxWidth: '60%', height: 'auto', objectFit: 'cover' }}/>
          <p style={{fontSize: '20px', maxWidth: '800px', margin: '0 auto'}}>
            Hello, I'm Izzy. a passionate photographer and visual storyteller. I love capturing moments that tell a story and evoke emotions. Whether it's the thrill of a sports event, the vibrancy of lifestyle shots, or the elegance of special events, I strive to bring out the beauty in every frame.
          </p>
          <br/>
          <p style={{fontSize: '20px', maxWidth: '800px', margin: '0 auto'}}>
            I am an aspriring photographer building my portfolio and skills. My goal is to create stunning visuals that resonate with viewers and leave a lasting impression.
          </p>
          <br/>
          <p style={{fontSize: '20px', maxWidth: '800px', margin: '0 auto'}}>
            My niche areas include event photography, sports photography, and lifestyle photography. I am always eager to take on new challenges and explore different styles and techniques if the opprtunity were to arise. Name the occasion, and I can work for you!
          </p>
          <br/>
          <p style={{fontSize: '20px', maxWidth: '800px', margin: '0 auto'}}>
            Thank you for visiting my portfolio. I look forward to connecting with you and sharing my passion for photography.
          </p>
      </div>
    </div>
  )
}

export default About
