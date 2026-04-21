import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid">
        <div>
          <div className="hero-badge">Local Video Player</div>
          <h1 className="hero-title">
            Watch<br />Everything.<br /><span className="accent">Beautifully.</span>
          </h1>
          <p className="hero-sub">
            YourPlayer is the video player your phone always deserved. No streaming, no ads,
            no internet required. Just your videos — playing flawlessly.
          </p>
          <div className="hero-actions">
            <a href="https://play.google.com/store/apps/details?id=com.krishnan.yourplayer" className="btn-primary" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="18" fill="currentColor">
                <path d="M3.18 23.75a1.51 1.51 0 0 1-.74-.2 1.63 1.63 0 0 1-.8-1.46V1.91A1.63 1.63 0 0 1 2.44.45l11.7 11.7zM16.09 14.3l-2.89-2.89 2.89-2.89 3.24 1.84a1.63 1.63 0 0 1 0 2.88zM2.56 23.71 14.06 12.2l-2.62-2.62z"/>
              </svg>
              Get it on Play Store
            </a>
            <a href="#features" className="btn-secondary">Explore Features →</a>
          </div>
          <div className="stats-row">
            <div className="stat">
              <div className="stat-num">4K</div>
              <div className="stat-label">Ultra HD Playback</div>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <div className="stat-num">0</div>
              <div className="stat-label">Ads. Ever.</div>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <div className="stat-num">∞</div>
              <div className="stat-label">Offline. Always.</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="phone-wrap">
            <img src="/cover_image.png" alt="YourPlayer app" className="hero-cover-img" />
            <div className="phone-glow" />
          </div>
        </div>
      </div>
    </section>
  )
}
