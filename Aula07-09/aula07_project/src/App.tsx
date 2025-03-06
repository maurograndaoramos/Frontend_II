import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import {Routes, Route, Link} from 'react-router-dom'

function App() {

  return (
    <>
      <h1>App</h1>
      <br />
      <p>Click the links to navigate</p>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
      </nav>
      <br />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/:id" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
