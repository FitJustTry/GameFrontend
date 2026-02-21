import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PopularGames.css';

export default function PopularGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/games');
        console.log('ข้อมูลจาก backend:', response.data); // ดูใน console ว่ามีข้อมูลไหม

        // แสดงทุกเกมก่อน (ถ้าต้องการกรอง active ให้ uncomment)
        // const activeGames = response.data.filter(g => g.isActive === 'true' || g.isActive === true);
        setGames(response.data);
        setError(null);
      } catch (err) {
        console.error('โหลดเกมล้มเหลว:', err);
        setError('ไม่สามารถดึงข้อมูลเกมได้ กรุณาตรวจสอบ backend');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const goTopup = (gameName) => {
    navigate(`/topup?game=${encodeURIComponent(gameName)}`);
  };

  if (loading) {
    return (
      <div className="popular-page">
        <div className="container">
          <h1 className="page-title">เกมยอดนิยม</h1>
          <p className="loading">กำลังโหลดเกม...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="popular-page">
        <div className="container">
          <h1 className="page-title">เกมยอดนิยม</h1>
          <p className="error-message">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="popular-page">

      <section className="games-section">
        <div className="container">
          <h2 className="section-title">🔥 เกมยอดนิยม</h2>

          {games.length === 0 ? (
            <p className="no-data">ยังไม่มีเกมในระบบตอนนี้</p>
          ) : (
            <div className="games-grid">
              {games.map((game) => (
                <div className="game-card" key={game.idGame}>
                  {/* รูปเกม */}
                  <div className="image-wrapper">
                    <img
                      src={game.imageUrl || 'https://via.placeholder.com/340x220?text=No+Image'}
                      alt={game.gameName}
                      className="game-img"
                      onError={(e) => (e.target.src = 'https://via.placeholder.com/340x220?text=Error')}
                    />
                    {game.isActive === 'true' && (
                      <span className="badge">ACTIVE</span>
                    )}
                  </div>

                  {/* ข้อมูลเกม */}
                  <div className="game-info">
                    <h3>{game.gameName}</h3>
                    <p className="game-sub">
                      {game.des || <em>ไม่มีคำอธิบาย</em>}
                    </p>
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
          )}
        </div>
      </section>
    </div>
  );
}