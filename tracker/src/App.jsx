import data from './data/milestones.json'
import Header from './components/Header'
import Countdowns from './components/Countdowns'
import PhaseIndicator from './components/PhaseIndicator'
import ActiveMilestones from './components/ActiveMilestones'
import Horizon from './components/Horizon'
import Completed from './components/Completed'

export default function App() {
  const active = data.milestones.filter(
    (m) => m.phase === data.currentPhase && m.status !== 'done' && !m.notBefore
  )
  const horizon = data.milestones.filter(
    (m) =>
      (m.phase === data.currentPhase && m.notBefore) ||
      (m.phase !== data.currentPhase && m.status !== 'done')
  )
  const completed = data.milestones.filter((m) => m.status === 'done')

  return (
    <div className="app">
      <div className="grain" />
      <Header currentPhase={data.phases.find((p) => p.id === data.currentPhase)} />
      <section className="section intro">
        <p className="intro-text">
          This is our private dashboard — a quiet place to see where we are
          on the path from <em>idea</em> to <em>opening night</em>. A staged reading
          of Lucas Hnath's <em>The Thin Place</em> in October 2026. A full
          production in October 2027. One step at a time, together.
        </p>
      </section>
      <Countdowns reading={data.reading} production={data.production} />
      <PhaseIndicator phases={data.phases} currentPhase={data.currentPhase} />
      <ActiveMilestones milestones={active} />
      <Horizon milestones={horizon} />
      {completed.length > 0 && <Completed milestones={completed} />}
      <footer className="footer">
        <p className="footer-text">The work itself is the argument.</p>
        <a className="hype-link" href={import.meta.env.BASE_URL + 'the-thin-place-hype.html'} target="_blank" rel="noopener noreferrer">
          Remember why we're doing this &rarr;
        </a>
      </footer>
    </div>
  )
}
