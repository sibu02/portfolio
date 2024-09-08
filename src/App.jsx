import './App.css'
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <div className='scroll-smooth'>
          <section id='hero'>
          <Hero/>
          </section>
          <section id='about'>
          <About/>
          </section>
          <section id='projects'>
          <Projects/>
          </section>
          <section id='contacts'>
          <Contacts/>
          </section>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
