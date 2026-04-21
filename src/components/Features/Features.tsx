import './Features.css'

const features = [
  { icon: '🎬', title: 'All Formats, Zero Hassle', desc: 'MP4, MKV, AVI, MOV — YourPlayer handles every format your phone has. No conversion. No "file not supported" errors. Just tap and play.' },
  { icon: '🏠', title: 'Smart Home Screen', desc: 'Fresh Arrivals, Watch History, and Featured picks — your video library organized beautifully so you always find what you want, fast.' },
  { icon: '🔖', title: 'Favorites', desc: 'Bookmark any video with one tap. Your favorites are always just one screen away, complete with thumbnail previews and file details.' },
  { icon: '📁', title: 'Folder Browse', desc: 'Browse your entire device storage by folder or view all videos at once. Clean list view with thumbnail, resolution badge, duration and size.' },
  { icon: '🔊', title: 'Volume Boost', desc: "Crank the volume up to 200% — like VLC on your phone. Great for quiet videos where your max volume just isn't enough." },
  { icon: '🎯', title: 'Equalizer & Audio', desc: "Fine-tune the sound to your liking with a built-in equalizer. Whether it's bass-heavy action or crisp dialogue, you control it." },
  { icon: '📝', title: 'Subtitle Support', desc: "Load external subtitle files with full control over font size, style, and display position. Watch foreign films the way they're meant to be watched." },
  { icon: '⚡', title: 'Gestures & Controls', desc: 'Swipe to adjust volume or brightness. Double-tap to skip forward. Fast-forward at your preferred speed. Built for one-handed use.' },
  { icon: '📺', title: 'Picture-in-Picture', desc: 'Pop your video into a floating window and keep watching while you browse other apps. Multitask without missing a single second.' },
]

export default function Features() {
  return (
    <section id="features">
      <div className="section-inner">
        <div className="features-intro reveal">
          <div className="features-intro-text">
            <div className="section-eyebrow">// Features</div>
            <h2 className="section-title">Built for <em>real</em><br />video lovers.</h2>
            <p className="features-desc">Every feature was designed with one goal — to get out of your way and let you enjoy your videos.</p>
          </div>
        </div>
        <div className="features-grid reveal">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
