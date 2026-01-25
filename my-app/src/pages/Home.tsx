import './Home.css'

function Home() {
  return (
    <div className="page-content">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap'}}>
        <h1 style={{flex: '0 0 auto'}}>Izzy</h1>
        <img src="/images/landscape-placeholder.jpg" alt="placeholder image" style={{ flex: '1', maxWidth: '60%', height: 'auto', objectFit: 'cover'}}/>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', marginTop: '20px'}}>
        <img src="/images/landscape-placeholder.jpg" alt="placeholder image" style={{ flex: '1', maxWidth: '60%', height: 'auto', objectFit: 'cover' }}/>
        <h1 style={{flex: '0 0 auto'}}>Visuals</h1>
      </div>
    </div>
  )
}

export default Home
