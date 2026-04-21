import './Screenshots.css'

const screens = [
  { label: 'Home',      src: '/home.png' },
  { label: 'Videos',   src: '/video.png' },
  { label: 'Favorites', src: '/favorite.png' },
  { label: 'Search',   src: '/search.png' },
  { label: 'Settings', src: '/settings.png' },
]

export default function Screenshots() {
  return (
    <section id="screenshots">
      <div className="section-inner">
        <div className="reveal">
          <div className="section-eyebrow">// Gallery</div>
          <h2 className="section-title">See it in action.</h2>
          <p className="screens-subtitle">Every screen carefully designed. Dark, fast, and beautiful by default.</p>
        </div>
        <div className="screens-row reveal">
          {screens.map(({ label, src }) => (
            <div className="screen-item" key={label}>
              <div className="screen-phone">
                <img src={src} alt={`${label} screen`} className="screen-img" />
              </div>
              <div className="screen-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
