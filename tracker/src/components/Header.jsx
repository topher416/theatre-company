export default function Header({ currentPhase }) {
  const now = new Date()
  const formatted = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header className="header">
      <p className="header-date">{formatted}</p>
      <h1 className="header-title">
        Founders' <span className="accent">Hub</span>
      </h1>
      <p className="header-phase">
        Current Phase: {currentPhase.name} &bull; {currentPhase.range}
      </p>
      <div className="header-line" />
    </header>
  )
}
