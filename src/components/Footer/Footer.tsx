import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">YourPlay<span>e</span>r</div>
      <div className="footer-copy">© 2026 YourPlayer. All rights reserved.</div>
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Support</a>
        <a href="https://play.google.com/store/apps/details?id=com.krishnan.yourplayer" target="_blank" rel="noreferrer">Play Store</a>
      </div>
    </footer>
  )
}
