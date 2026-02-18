export default function Horizon({ milestones }) {
  if (milestones.length === 0) return null

  function formatNotBefore(dateStr) {
    if (!dateStr) return null
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    })
  }

  return (
    <section className="section">
      <p className="section-label">On the Horizon</p>
      <p className="section-desc">
        These are coming, but not yet. The "not before" dates are guardrails —
        reminders that we do not need to think about these things until their
        time arrives. They are here so we can see the shape of what is ahead
        without feeling pressure to act on it now.
      </p>
      {milestones.map((m) => (
        <div key={m.id} className="milestone horizon-milestone">
          <div className="milestone-status not-started" />
          <div className="milestone-body">
            <div className="milestone-title">{m.title}</div>
            <div className="milestone-desc">{m.description}</div>
            {m.notBefore && (
              <div className="milestone-meta">
                <span className="not-before" style={{ marginLeft: 0 }}>
                  Not before {formatNotBefore(m.notBefore)}
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}
