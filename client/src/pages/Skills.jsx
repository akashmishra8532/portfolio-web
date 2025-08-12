import constants from '../data/constants'

export default function Skills() {
  const { skills } = constants
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([group, list]) => (
          <div key={group} className="p-5 rounded-xl border border-white/10 bg-white/5">
            <h3 className="font-semibold mb-3 capitalize">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map((item) => (
                <span key={item} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}



