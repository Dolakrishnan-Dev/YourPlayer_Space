import './HowItWorks.css'

const steps = [
  {
    num: '01', icon: '📲',
    title: 'Download & Install',
    desc: "Get YourPlayer from the Play Store for free. No account needed. No sign-up. Open it, grant storage access, and you're done.",
    connector: true,
  },
  {
    num: '02', icon: '📂',
    title: 'Your Library Appears',
    desc: 'YourPlayer instantly scans your device and shows all your videos — sorted, categorized, and displayed with thumbnails and duration previews.',
    connector: true,
  },
  {
    num: '03', icon: '▶️',
    title: 'Tap & Enjoy',
    desc: 'Tap any video and it plays. Adjust volume, skip ahead, add subtitles, boost bass — everything is at your fingertips. No buffering. Ever.',
    connector: false,
  },
]

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="section-inner">
        <div className="reveal">
          <div className="section-eyebrow">// How it works</div>
          <h2 className="section-title">Three steps<br />to perfect playback.</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card reveal" key={step.num}>
              <div className="step-num">{step.num}</div>
              <div className="step-dot">{step.icon}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
              {step.connector && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
