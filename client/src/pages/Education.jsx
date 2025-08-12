import constants from '../data/constants'

export default function Education() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Education</h2>
      <div className="space-y-4">
        {constants.education.map((e, idx) => (
          <div key={idx} className="p-5 rounded-xl border border-white/10 bg-white/5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{e.school}</h3>
              <span className="text-xs text-light/60">{e.period}</span>
            </div>
            <p className="text-sm text-light/80">{e.qualification}</p>
            {e.score && <p className="text-sm text-light/60">{e.score}</p>}
            {e.location && <p className="text-sm text-light/60">{e.location}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}





