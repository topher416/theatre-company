export default function Countdowns({ reading, production }) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  function daysUntil(dateStr) {
    const target = new Date(dateStr + 'T00:00:00')
    const diff = target - today
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  }

  function formatDate(dateStr) {
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const readingDays = daysUntil(reading.date)
  const productionDays = daysUntil(production.date)

  return (
    <section className="section">
      <p className="section-label">The Two Dates That Matter</p>
      <p className="section-desc">
        Everything we do is in service of getting to these two moments.
        The reading is our debut — a chance to put the work in front of people
        for the first time. Opening night is the destination.
      </p>
      <div className="countdowns">
        <div className="countdown-card">
          <div className="countdown-number">{readingDays}</div>
          <div className="countdown-unit">days</div>
          <div className="countdown-label">{reading.label}</div>
          <div className="countdown-date">{formatDate(reading.date)}</div>
        </div>
        <div className="countdown-card">
          <div className="countdown-number">{productionDays}</div>
          <div className="countdown-unit">days</div>
          <div className="countdown-label">{production.label}</div>
          <div className="countdown-date">{formatDate(production.date)}</div>
        </div>
      </div>
    </section>
  )
}
