export default function PhaseIndicator({ phases, currentPhase }) {
  const currentIndex = phases.findIndex((p) => p.id === currentPhase)
  const current = phases[currentIndex]

  return (
    <section className="section">
      <p className="section-label">The Path</p>
      <p className="section-desc">
        We are building this in four phases over twenty months.
        The highlighted phase is where we are right now. We do not skip ahead.
      </p>
      <div className="phases">
        {phases.map((phase, i) => {
          let state = 'future'
          if (i < currentIndex) state = 'past'
          if (i === currentIndex) state = 'current'

          return (
            <div key={phase.id} className={`phase ${state}`}>
              <div className="phase-name">{phase.name}</div>
              <div className="phase-range">{phase.range}</div>
            </div>
          )
        })}
      </div>
      {current && <p className="phase-description">{current.description}</p>}
    </section>
  )
}
