import { useState } from 'react'

export default function Completed({ milestones }) {
  const [open, setOpen] = useState(false)

  return (
    <section className="section">
      <p className="section-desc" style={{ marginBottom: '1rem' }}>
        Proof that we are moving. Every finished milestone started as an idea
        on this list.
      </p>
      <button className="completed-toggle" onClick={() => setOpen(!open)}>
        <span className={`arrow ${open ? 'open' : ''}`}>&#9654;</span>
        Completed ({milestones.length})
      </button>
      {open && (
        <div className="completed-list">
          {milestones.map((m) => (
            <div key={m.id} className="milestone is-done">
              <div className="milestone-status done" />
              <div className="milestone-body">
                <div className="milestone-title">{m.title}</div>
                <div className="milestone-desc">{m.description}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
