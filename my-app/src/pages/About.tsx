import './About.css'

function About() {
  return (
    <div className="page-content">
          <div className='image-container'>
            <img src="/images/IMG_5715.heic" alt="placeholder image" style={{ maxWidth: '75%', height: 'auto', objectFit: 'cover', borderRadius: '150px 150px 0px 0px' }}/>
          </div>
          <div className="paragraph-1">
            <h1 style={{fontSize: '50px', textAlign:'center'}}>About Me</h1>
            <p>
              Hello, I'm Izzy. a passionate photographer and visual storyteller. I love capturing moments that tell a story and evoke emotions. Whether it's the thrill of a sports event, the vibrancy of lifestyle shots, or the elegance of special events, I strive to bring out the beauty in every frame.
            </p>
            <br/>
            <p>
              I am an aspriring photographer building my portfolio and skills. My goal is to create stunning visuals that resonate with viewers and leave a lasting impression.
            </p>
            <br/>
            <p>
              My niche areas include event photography, sports photography, and lifestyle photography. I am always eager to take on new challenges and explore different styles and techniques if the opprtunity were to arise. Name the occasion, and I can work for you!
            </p>
            <br/>
            <p>
              Thank you for visiting my portfolio. I look forward to connecting with you and sharing my passion for photography.
            </p>
          </div>
    </div>
  )
}

export default About
