export default function ActiveMilestones({ milestones }) {
  if (milestones.length === 0) return null

  const statusLabels = {
    'not-started': 'Not started',
    'in-progress': 'In progress',
    blocked: 'Blocked',
    done: 'Done',
  }

  return (
    <section className="section">
      <p className="section-label">What's Alive Right Now</p>
      <p className="section-desc">
        These are the things we can actually act on today. Never more than a
        handful at a time. The glowing dot means it is in progress. When
        something is done, it moves to the completed section below.
      </p>
      {milestones.map((m) => (
        <div key={m.id} className={`milestone ${m.status === 'done' ? 'is-done' : ''}`}>
          <div className={`milestone-status ${m.status}`} />
          <div className="milestone-body">
            <div className="milestone-title">{m.title}</div>
            <div className="milestone-desc">{m.description}</div>
            <div className="milestone-meta">
              <span className={`status-label ${m.status}`}>
                {statusLabels[m.status] || m.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
