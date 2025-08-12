import constants from '../data/constants'

export default function About() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <p className="text-light/80 text-lg">
        I am {constants.name}, a MERN stack developer passionate about building performant, user-friendly web
        applications. I enjoy crafting clean UIs, robust APIs, and scalable systems.
      </p>
    </section>
  )
}


