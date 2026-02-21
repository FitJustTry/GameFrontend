return (
  <section className="games-section">
    <div className="container">
      <h2 className="section-title">🔥 เกมยอดนิยม</h2>

      <div className="games-grid">
        {games.map((game) => (
          <div className="game-card" key={game.idGame}>
            
            {/* รูปเกม */}
            <div className="image-wrapper">
              <img
                src={game.imageUrl}
                alt={game.gameName}
                className="game-img"
              />
              {game.isActive && (
                <span className="badge">ACTIVE</span>
              )}
            </div>

            {/* ข้อมูลเกม */}
            <div className="game-info">
              <h3>{game.gameName}</h3>
              <p className="game-sub">{game.des}</p>
            </div>

            {/* ปุ่ม */}
            <div className="game-meta">
              <button
                className="play-btn"
                onClick={() => goTopup(game.gameName)}
              >
                เติมเกม →
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  </section>
);