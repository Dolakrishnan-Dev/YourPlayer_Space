const historyItems = [
  { cls: 'mock-thumb-1', name: 'Sirivennela_Lyrical_Shyam...', meta: '10 MB · 04:27' },
  { cls: 'mock-thumb-2', name: 'One_Direction_Night_Chang...', meta: '33 MB · 04:00' },
  { cls: 'mock-thumb-3', name: 'Alice_in_Borderland_S03...', meta: '557 MB · 01:01:47' },
]

export default function PhoneMockup() {
  return (
    <div className="phone-wrap">
      <div className="phone-frame phone-float">
        <div className="phone-screen">
          <div className="mock-status"><span>5:51</span><span>▲ ◀ ■</span></div>
          <div className="mock-title">Your<span>Player</span></div>
          <div className="mock-section-label">Fresh Arrivals</div>
          <div className="mock-cards">
            <div className="mock-card mock-card-1" />
            <div className="mock-card mock-card-2" />
            <div className="mock-card mock-card-3" />
          </div>
          <div className="mock-section-label">History</div>
          {historyItems.map((item) => (
            <div className="mock-list-item" key={item.name}>
              <div className={`mock-thumb ${item.cls}`} />
              <div className="mock-info">
                <div className="mock-name">{item.name}</div>
                <div className="mock-meta">{item.meta}</div>
              </div>
            </div>
          ))}
          <div className="mock-nav">
            <div className="mock-nav-item"><span className="mock-nav-icon">📹</span>Video</div>
            <div className="mock-nav-item"><span className="mock-nav-icon">🔍</span>Search</div>
            <div className="mock-nav-item"><div className="mock-nav-icon mock-nav-home">🏠</div>Home</div>
            <div className="mock-nav-item"><span className="mock-nav-icon">🔖</span>Fav</div>
            <div className="mock-nav-item"><span className="mock-nav-icon">⚙️</span>Settings</div>
          </div>
        </div>
      </div>
      <div className="phone-glow" />
    </div>
  )
}
