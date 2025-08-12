import { motion } from 'framer-motion'
import constants from '../data/constants'

export default function About() {
  return (
    <section className="container py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-xl text-light/80 max-w-3xl mx-auto">
          A passionate Full-Stack Developer with a love for creating impactful digital solutions
        </p>
      </motion.div>

      {/* Main Content - Single Column Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-8">
          {/* Who I Am */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Who I Am</h3>
            <p className="text-light/80 leading-relaxed text-lg">
              I'm {constants.name}, a Computer Science and Engineering student at Lovely Professional University. 
              I have a deep passion for turning complex problems into simple, beautiful, and intuitive solutions. 
              My journey in technology began with curiosity and has evolved into a commitment to creating 
              meaningful digital experiences that make a difference in people's lives.
            </p>
          </div>

          {/* What I Do */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold mb-4 text-primary">What I Do</h3>
            <p className="text-light/80 leading-relaxed text-lg">
              I specialize in full-stack development using the MERN stack, creating responsive web applications 
              that deliver exceptional user experiences. From food ordering platforms to healthcare systems, 
              I've built solutions that solve real-world problems. My work emphasizes clean UI design, 
              reusable components, and scalable architecture that can grow with your business needs.
            </p>
          </div>

          {/* My Approach */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold mb-4 text-primary">My Approach</h3>
            <p className="text-light/80 leading-relaxed text-lg">
              I believe in writing clean, maintainable code and creating scalable architectures. 
              Every project is an opportunity to learn, innovate, and push the boundaries of what's possible. 
              I thrive in collaborative environments and bring strong problem-solving abilities, adaptability, 
              and project management skills to every challenge I undertake.
            </p>
          </div>

          {/* Training & Experience */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Training & Experience</h3>
            <p className="text-light/80 leading-relaxed text-lg">
              I have successfully completed industry-relevant training at Cipher Schools, where I developed 
              and deployed real-world applications, gaining expertise in authentication, RESTful APIs, 
              and database integration. Beyond academics, I'm continuously exploring new technologies, 
              including Cloud Computing and Large Language Models, to stay aligned with emerging trends 
              in software development.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-primary/20 to-transparent rounded-2xl p-8 border border-primary/30">
          <h3 className="text-2xl font-semibold mb-4 text-white">My Mission</h3>
          <p className="text-lg text-light/80 max-w-4xl mx-auto leading-relaxed">
            I'm committed to continuous learning and staying at the forefront of technology. 
            My goal is to leverage my technical expertise and creativity to contribute meaningfully 
            to innovative projects that solve real-world problems and make a positive impact on people's lives.
          </p>
        </div>
      </motion.div>
    </section>
  )
}


