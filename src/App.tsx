import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import BarSnooker from './components/BarSnooker'
import Experience from './components/Experience'
import HoursLocation from './components/HoursLocation'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <hr className="gold-hr" />
      <About />
      <hr className="gold-hr" />
      <Services />
      <hr className="gold-hr" />
      <BarSnooker />
      <hr className="gold-hr" />
      <Experience />
      <HoursLocation />
      <hr className="gold-hr" />
      <Reviews />
      <Footer />
    </>
  )
}
