// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

// ใช้รูปจาก tool results (หรือแทนที่ด้วย URL จริง)
const gameImages = {
  freefire: 'https://pbs.twimg.com/media/E_-wit2UYAEZxA5.jpg',      // Free Fire Venom collab
  mobilelegends: 'https://cdn.prod.website-files.com/65956e2711516206d2d1258f/68534142932e5c3b47d3de7d_MLBB-hero-Zetian-Overview-skills-release-date-and-more.webp',
  pubg: 'https://sm.ign.com/ign_in/screenshot/default/en-21_2w4k.jpg',
  genshin: 'https://webstatic.hoyoverse.com/upload/op-public/2023/06/21/998b00893878564ff20cbdb5f260c71c_1476353061496485818.png',
  valorant: 'https://cdna.artstation.com/p/assets/images/images/068/586/454/large/su-ke-iso-wallpaper-1920x1080-1697670022588.jpg?1698179055',
  rov: 'https://i.ytimg.com/vi/ddb6eFfARJk/sddefault.jpg',
  honkai: 'https://webstatic.hoyoverse.com/upload/op-public/2023/07/18/043c71056d8d2f6e2b46536fda409b20_5321003634705810847.png',
  codmobile: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/codm/CODM-SEASON-04-UPRISING-005.jpg',
  // เพิ่มเกมอื่น ๆ ได้ตามต้องการ
};

function Home() {
  const navigate = useNavigate();

  const goTopup = (game) => navigate(`/topup?game=${encodeURIComponent(game)}`);

  const goToPopular = () => navigate('/popular-games');  // เปลี่ยน path ได้ตาม router ของคุณ

  return (
    <div>
      <header>
        <div className="container nav">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:8}}>
              <path d="M21 11.5a3 3 0 0 0-3-3h-1.5" />
              <path d="M3 11.5a3 3 0 0 1 3-3h1.5" />
              <path d="M12 22v-6" />
              <circle cx="12" cy="7" r="3" />
            </svg>
            GamerHub
          </div>
          <div className="nav-links">
            <button onClick={() => navigate('/')} className="nav-link">หน้าหลัก</button>
            <button onClick={() => navigate('/topup')} className="nav-link">เติมเกม</button>
            <button onClick={() => navigate('/')} className="nav-link">โปรโมชั่น</button>
            {/* ปุ่มใหม่: เกมยอดนิยม */}
            <button onClick={goToPopular} className="nav-link">เกมยอดนิยม</button>
            <button onClick={() => navigate('/')} className="nav-link">ติดต่อเรา</button>
            <button onClick={() => navigate('/auth/login')} className="nav-link">เข้าสู่ระบบ</button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>เติมเกมไว เข้าแน่นอน</h1>
          <p>ราคาถูกที่สุด</p>
          <button className="cta-btn" onClick={() => navigate('/topup')}>เริ่มเติมเกม →</button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>ทำไมต้องเลือกเรา?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>ไวโฉบไว</h3>
              <p>ระบบอัตโนมัติ รวดเร็วทันใจ</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>เติมเกม 100%</h3>
              <p>รับประกันเข้าเกมแน่นอน</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>ราคาถูก + โบนัส</h3>
              <p>ถูกกว่าร้านอื่นทุกแห่ง</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>รองรับทุกช่องทาง</h3>
              <p>TrueMoney, QR, Banking, ShopeePay</p>
            </div>
          </div>
        </div>
      </section>

      <section className="games-section">
        <div className="container">
          <h2>เกมยอดนิยม</h2>
          <div className="games-grid">
            <div className="game-card">
              <img src={gameImages.freefire} alt="Free Fire" className="game-img" />
              <div className="game-info">
                <h3>Free Fire</h3>
                <p className="game-sub">เติมเพชร Free Fire</p>
              </div>
              <div className="game-meta">
                <span className="game-price">฿199</span>
                <button className="play-btn" onClick={() => goTopup('Free Fire')}>เติมเลย</button>
              </div>
            </div>
            <div className="game-card">
              <img src={gameImages.mobilelegends} alt="Mobile Legends" className="game-img" />
              <div className="game-info">
                <h3>Mobile Legends</h3>
                <p className="game-sub">เติมเพชร ML</p>
              </div>
              <div className="game-meta">
                <span className="game-price">฿129</span>
                <button className="play-btn" onClick={() => goTopup('Mobile Legends')}>เติมเลย</button>
              </div>
            </div>
            <div className="game-card">
              <img src={gameImages.pubg} alt="PUBG Mobile" className="game-img" />
              <div className="game-info">
                <h3>PUBG Mobile</h3>
                <p className="game-sub">เติม UC PUBG</p>
              </div>
              <div className="game-meta">
                <span className="game-price">฿159</span>
                <button className="play-btn" onClick={() => goTopup('PUBG Mobile')}>เติมเลย</button>
              </div>
            </div>
            <div className="game-card">
              <img src={gameImages.genshin} alt="Genshin Impact" className="game-img" />
              <div className="game-info">
                <h3>Genshin Impact</h3>
                <p className="game-sub">เติม Primogems</p>
              </div>
              <div className="game-meta">
                <span className="game-price">฿249</span>
                <button className="play-btn" onClick={() => goTopup('Genshin Impact')}>เติมเลย</button>
              </div>
            </div>
            <div className="game-card">
              <img src={gameImages.valorant} alt="Valorant" className="game-img" />
              <div className="game-info">
                <h3>Valorant</h3>
                <p className="game-sub">เติม VP Valorant</p>
              </div>
              <div className="game-meta">
                <span className="game-price">฿199</span>
                <button className="play-btn" onClick={() => goTopup('Valorant')}>เติมเลย</button>
              </div>
            </div>
            <div className="game-card">
              <img src={gameImages.rov} alt="ROV" className="game-img" />
              <div className="game-info">
                <h3>ROV</h3>
                <p className="game-sub">เติม ROV</p>
              </div>
              <div className="game-meta">
                <span className="game-price">฿89</span>
                <button className="play-btn" onClick={() => goTopup('ROV')}>เติมเลย</button>
              </div>
            </div>
            <div className="game-card">
              <img src={gameImages.honkai} alt="Honkai Star Rail" className="game-img" />
              <div className="game-info">
                <h3>Honkai Star Rail</h3>
                <p className="game-sub">เติม Stellar Jade</p>
              </div>
              <div className="game-meta">
                <span className="game-price">฿199</span>
                <button className="play-btn" onClick={() => goTopup('Honkai Star Rail')}>เติมเลย</button>
              </div>
            </div>
            <div className="game-card">
              <img src={gameImages.codmobile} alt="Call of Duty Mobile" className="game-img" />
              <div className="game-info">
                <h3>Call of Duty</h3>
                <p className="game-sub">เติม COD Points</p>
              </div>
              <div className="game-meta">
                <span className="game-price">฿179</span>
                <button className="play-btn" onClick={() => goTopup('Call of Duty')}>เติมเลย</button>
              </div>
            </div>
            {/* เพิ่มเกมอื่น ๆ ได้ตามต้องการ */}
          </div>
        </div>
      </section>

      <section className="promotions">
        <div className="container">
          <h2>โปรโมชั่นพิเศษ</h2>
          <div className="promo-grid">
            <div className="promo-card promo-orange">
              <h3>ฟรี 10%</h3>
              <p>เมื่อเติมครั้งแรก รับเพิ่ม 10%</p>
              <button className="play-btn">รับสิทธิ์</button>
            </div>
            <div className="promo-card promo-purple">
              <h3>ส่วนลด 15%</h3>
              <p>สำหรับการเติมครั้งต่อไป</p>
              <button className="play-btn">ใช้โค้ด</button>
            </div>
            <div className="promo-card promo-green">
              <h3>คะแนนสะสม</h3>
              <p>เติมครบ 100 บาท รับ 10 คะแนน</p>
              <button className="play-btn">ดูรายละเอียด</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>เกมยอดนิยม</h4>
              <a href="#">Free Fire</a>
              <a href="#">Mobile Legends</a>
              <a href="#">PUBG Mobile</a>
              <a href="#">Genshin Impact</a>
            </div>
            <div className="footer-section">
              <h4>บริการ</h4>
              <a href="#">เติมเกม</a>
              <a href="#">โปรโมชั่น</a>
              <a href="#">วิธีเติมเงิน</a>
            </div>
            <div className="footer-section">
              <h4>ติดต่อเรา</h4>
              <div className="social-icons">
                <a href="#">f</a>
                <a href="#">📷</a>
                <a href="#">💬</a>
                <a href="#">📱</a>
              </div>
            </div>
          </div>
          <div className="copyright">
            © 2024 GamerHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;