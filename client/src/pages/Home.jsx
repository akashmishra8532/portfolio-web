import Hero from '../components/Hero'
import Projects from './Projects'
import AnimatedSection from '../components/AnimatedSection'
import About from './About'
import Skills from './Skills'
import Training from './Training'
import Certificates from './Certificates'
import Education from './Education'
import Contact from './Contact'

export default function Home() {
  return (
    <div className="space-y-16">
      <div id="home" className="section"><Hero /></div>

      <div id="about" className="section">
        <AnimatedSection>
          <About />
        </AnimatedSection>
      </div>

      <div id="skills" className="section">
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
      </div>

      <div id="projects" className="section">
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
      </div>

      <div id="training" className="section">
        <AnimatedSection>
          <Training />
        </AnimatedSection>
      </div>

      <div id="certificates" className="section">
        <AnimatedSection>
          <Certificates />
        </AnimatedSection>
      </div>

      <div id="education" className="section">
        <AnimatedSection>
          <Education />
        </AnimatedSection>
      </div>

      <div id="contact" className="section">
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </div>
    </div>
  )
}


