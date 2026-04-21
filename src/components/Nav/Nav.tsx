import './Nav.css'

export default function Nav() {
  return (
    <nav>
      <div className="nav-logo">YourPlay<span>e</span>r</div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#screenshots">Gallery</a></li>
        <li><a href="#how">How it Works</a></li>
      </ul>
      <a href="https://play.google.com/store/apps/details?id=com.krishnan.yourplayer" className="nav-cta" target="_blank" rel="noreferrer">
        Download Free
      </a>
    </nav>
  )
}
