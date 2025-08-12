import constants from '../data/constants'

export default function Training() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Training</h2>
      <div className="space-y-4">
        {constants.training.map((t, idx) => (
          <div key={idx} className="p-5 rounded-xl border border-white/10 bg-white/5">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold">{t.title}</h3>
              <span className="text-xs text-light/60">{t.period}</span>
            </div>
            <p className="text-sm text-light/80">{t.org}</p>
            <ul className="list-disc ml-5 mt-2 text-sm">
              {t.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}


