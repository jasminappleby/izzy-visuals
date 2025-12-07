import { Routes, Route, Link, Outlet } from 'react-router-dom'
import Block from './components/block'
import useLocalStorage from 'use-local-storage'
import './App.css'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme == 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <>
      <div className="app" data-theme={theme}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />}>
            <Route path="events" element={<Events />} />
            <Route path="sports" element={<Sports />} />
            <Route path="lifestyle" element={<Lifestyle />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <button onClick={switchTheme}>
          {theme == 'light' ? 'dark' : 'light'}
        </button>
        <Block />
      </div>

    </>
  )
}

// Page components
function Home() {
  return <h1 style={{fontSize: '100px'}}>Home</h1>
}

function About() {
  return <h1>About</h1>
}

function Gallery() {
  return (
    <div>
      <h1>Gallery</h1>
      <nav>
        <Link to="/gallery/events">Events</Link>
        <Link to="/gallery/sports">Sports</Link>
        <Link to="/gallery/lifestyle">Lifestyle</Link>
      </nav>
      <Outlet />
    </div>
  )
}

function Events() {
  return <h1>Events</h1>
}

function Sports() {
  return <h1>Sports</h1>
}

function Lifestyle() {
  return <h1>Lifestyle</h1>
}

function Contact() {
  return <h1>Contact</h1>
}

export default App