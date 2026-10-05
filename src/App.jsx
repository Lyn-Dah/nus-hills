import { Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Why from './pages/Why'
import Gallery from './pages/Gallery'
import News from './pages/News'
import Admission from './pages/Admission'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/why-join" element={<Why />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
