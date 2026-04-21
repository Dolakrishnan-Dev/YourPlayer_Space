import './Download.css'

export default function Download() {
  return (
    <section id="download">
      <div className="download-inner reveal">
        <div className="download-icon">▶</div>
        <h2 className="download-title">Ready to play?</h2>
        <p className="download-sub">
          Join thousands of users who've made YourPlayer their go-to video player.
          Free to download. No strings attached.
        </p>
        <a href="https://play.google.com/store/apps/details?id=com.krishnan.yourplayer" className="download-btn" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.18 23.75a1.51 1.51 0 0 1-.74-.2 1.63 1.63 0 0 1-.8-1.46V1.91A1.63 1.63 0 0 1 2.44.45l11.7 11.7zM16.09 14.3l-2.89-2.89 2.89-2.89 3.24 1.84a1.63 1.63 0 0 1 0 2.88zM2.56 23.71 14.06 12.2l-2.62-2.62z"/>
          </svg>
          Download on Google Play
        </a>
        <div className="download-note">Free · Android · No internet required to play</div>
      </div>
    </section>
  )
}
