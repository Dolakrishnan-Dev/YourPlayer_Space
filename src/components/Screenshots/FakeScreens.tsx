type NavTab = 'video' | 'search' | 'home' | 'fav' | 'settings'

function ScreenNav({ active }: { active: NavTab }) {
  return (
    <div className="fs-nav">
      <div className={`fs-nav-i${active === 'video' ? ' act' : ''}`}><span>📹</span>Video</div>
      <div className={`fs-nav-i${active === 'search' ? ' act' : ''}`}><span>🔍</span>Search</div>
      <div className={`fs-nav-i${active === 'home' ? ' act' : ''}`}><div className="fs-nav-home">🏠</div>Home</div>
      <div className={`fs-nav-i${active === 'fav' ? ' act' : ''}`}><span>🔖</span>Fav</div>
      <div className={`fs-nav-i${active === 'settings' ? ' act' : ''}`}><span>⚙️</span>Set</div>
    </div>
  )
}

export function HomeScreen() {
  return (
    <div className="fake-screen">
      <div className="fs-status"><span>5:51</span><span>▲ ◀ ■</span></div>
      <div className="fs-topbar">Your<span className="g">Player</span></div>
      <div className="fs-label">Fresh Arrivals</div>
      <div className="fs-cards">
        <div className="fs-card fc-a" /><div className="fs-card fc-b" /><div className="fs-card fc-c" />
      </div>
      <div className="fs-label">History</div>
      <div className="fs-li"><div className="fs-li-thumb lt-a" /><div className="fs-li-text"><div className="fs-li-name">Sirivennela_Lyrical...</div><div className="fs-li-meta">10 MB · 04:27</div></div></div>
      <div className="fs-li"><div className="fs-li-thumb lt-b" /><div className="fs-li-text"><div className="fs-li-name">One_Direction_Night...</div><div className="fs-li-meta">33 MB · 04:00</div></div></div>
      <div className="fs-label" style={{ marginTop: 8 }}>Featured</div>
      <div className="fs-cards">
        <div className="fs-card fc-c" /><div className="fs-card fc-a" />
      </div>
      <ScreenNav active="home" />
    </div>
  )
}

export function VideosScreen() {
  const items = [
    { cls: 'lt-a', name: 'SaiAbhyankkar_Pavazha...', meta: '35 MB · 05:09 · SD' },
    { cls: 'lt-b', name: 'Alex_Warren_Ordinary_Ly...', meta: '21 MB · 03:05 · 1080p' },
    { cls: 'lt-c', name: 'Amma_Song_Full_Video_OKE...', meta: '42 MB · 05:35 · 1080p' },
    { cls: 'lt-d', name: 'Androidify_yourself_with_a...', meta: '6 MB · 01:18 · 720p' },
    { cls: 'lt-a', name: 'ARMCHAIR_Bean_Funny_Clips...', meta: '240 MB · 15:03 · 1080p' },
    { cls: 'lt-b', name: 'Catch_up_quick_Apple_Sept...', meta: '14 MB · 02:34 · 720p' },
  ]
  return (
    <div className="fake-screen">
      <div className="fs-status"><span>5:51</span><span>▲ ◀ ■</span></div>
      <div className="fs-pg-title">Videos</div>
      {items.map((item) => (
        <div className="fs-li" key={item.name}>
          <div className={`fs-li-thumb ${item.cls}`} />
          <div className="fs-li-text"><div className="fs-li-name">{item.name}</div><div className="fs-li-meta">{item.meta}</div></div>
        </div>
      ))}
      <ScreenNav active="video" />
    </div>
  )
}

export function FavoritesScreen() {
  const items = [
    { cls: 'lt-d', name: 'www.1TamilMV - Wednesday S02E05...', meta: '768 MB · 13/02/2026' },
    { cls: 'lt-c', name: 'VID_20260302_120403.mp4', meta: '2 MB · 02/03/2026' },
    { cls: 'lt-a', name: 'Alex_Warren_Ordinary_Lyrics...', meta: '21 MB · 08/03/2026' },
    { cls: 'lt-b', name: '_SaiAbhyankkar_Pavazha_Malli...', meta: '35 MB · 08/03/2026' },
    { cls: 'lt-d', name: 'They_Call_Him_OG_Firestorm...', meta: '24 MB · 08/03/2026' },
    { cls: 'lt-c', name: 'Sirivennela_Lyrical_Shyam...', meta: '10 MB · 08/03/2026' },
  ]
  return (
    <div className="fake-screen">
      <div className="fs-status"><span>5:51</span><span>▲ ◀ ■</span></div>
      <div className="fs-pg-title">Favorites</div>
      {items.map((item) => (
        <div className="fs-li" key={item.name}>
          <div className={`fs-li-thumb ${item.cls}`} />
          <div className="fs-li-text"><div className="fs-li-name">{item.name}</div><div className="fs-li-meta">{item.meta}</div></div>
        </div>
      ))}
      <ScreenNav active="fav" />
    </div>
  )
}

export function SearchScreen() {
  const items = [
    { cls: 'lt-a', name: 'Sirivennela_Lyrical_Shyam...', meta: '10 MB · 08/03/2026' },
    { cls: 'lt-b', name: 'One_Direction_Night_Changes...', meta: '33 MB · 08/03/2026' },
    { cls: 'lt-c', name: 'www.1TamilMV - Alice in Border...', meta: '557 MB · 13/02/2026' },
    { cls: 'lt-d', name: 'Vibe_Undi_Lyrical_Mirai_Teja...', meta: '32 MB · 08/03/2026' },
    { cls: 'lt-a', name: 'Vaalu_Kalla_Vayyari_Song...', meta: '18 MB · 08/03/2026' },
  ]
  return (
    <div className="fake-screen">
      <div className="fs-status"><span>5:51</span><span>▲ ◀ ■</span></div>
      <div className="fs-topbar" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 18 }}>Search</div>
      <div className="fs-label">HISTORY</div>
      {items.map((item) => (
        <div className="fs-li" key={item.name}>
          <div className={`fs-li-thumb ${item.cls}`} />
          <div className="fs-li-text"><div className="fs-li-name">{item.name}</div><div className="fs-li-meta">{item.meta}</div></div>
        </div>
      ))}
      <ScreenNav active="search" />
    </div>
  )
}

export function SettingsScreen() {
  const rows = [
    { icon: '⚙️', title: 'General', sub: 'Theme' },
    { icon: '▶️', title: 'Player', sub: 'Gestures, Fast Forward, PiP' },
    { icon: '💬', title: 'Subtitle', sub: 'Display, Style, Size' },
    { icon: '⭐', title: 'Rate Us', sub: 'Love the app? Leave a review' },
    { icon: '🔍', title: 'Scan Media', sub: 'Refresh your video library' },
    { icon: 'ℹ️', title: 'About', sub: 'Version, Support, Credits' },
  ]
  return (
    <div className="fake-screen">
      <div className="fs-status"><span>5:51</span><span>▲ ◀ ■</span></div>
      <div className="fs-topbar" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>SETTINGS</div>
      {rows.map((row) => (
        <div className="fs-setting-row" key={row.title}>
          <div className="fs-setting-icon">{row.icon}</div>
          <div className="fs-setting-text">
            <div className="fs-setting-title">{row.title}</div>
            <div className="fs-setting-sub">{row.sub}</div>
          </div>
          <div className="fs-setting-arrow">›</div>
        </div>
      ))}
      <ScreenNav active="settings" />
    </div>
  )
}
