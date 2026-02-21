// payment.jsx
import React, { useState } from 'react';
import './payment.css';
import { useNavigate } from 'react-router-dom';

// Game images
const gameImages = {
  freefire: 'https://pbs.twimg.com/media/E_-wit2UYAEZxA5.jpg',
  mobilelegends: 'https://cdn.prod.website-files.com/65956e2711516206d2d1258f/68534142932e5c3b47d3de7d_MLBB-hero-Zetian-Overview-skills-release-date-and-more.webp',
  pubg: 'https://sm.ign.com/ign_in/screenshot/default/en-21_2w4k.jpg',
  genshin: 'https://webstatic.hoyoverse.com/upload/op-public/2023/06/21/998b00893878564ff20cbdb5f260c71c_1476353061496485818.png',
  valorant: 'https://cdna.artstation.com/p/assets/images/images/068/586/454/large/su-ke-iso-wallpaper-1920x1080-1697670022588.jpg?1698179055',
  rov: 'https://i.ytimg.com/vi/ddb6eFfARJk/sddefault.jpg',
};

const games = [
  { id: 'freefire', name: 'Free Fire', desc: 'Garena Free Fire', price: 199, image: gameImages.freefire },
  { id: 'mobilelegends', name: 'Mobile Legends', desc: 'MLBB', price: 129, image: gameImages.mobilelegends },
  { id: 'pubg', name: 'PUBG Mobile', desc: 'PUBG Mobile', price: 159, image: gameImages.pubg },
  { id: 'genshin', name: 'Genshin Impact', desc: 'Genshin Impact', price: 249, image: gameImages.genshin },
  { id: 'valorant', name: 'Valorant', desc: 'Valorant', price: 199, image: gameImages.valorant },
  { id: 'rov', name: 'ROV', desc: 'Realm of Valor', price: 89, image: gameImages.rov },
];

function Payment() {
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState(games[0]);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    { id: 'qr', name: 'QR PromptPay', icon: '📱' },
    { id: 'truemoney', name: 'TrueMoney Wallet', icon: '🟠' },
    { id: 'mobilebanking', name: 'Mobile Banking', icon: '🏦' },
    { id: 'shopeepay', name: 'ShopeePay', icon: '🛍️' },
    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
  ];

  return (
    <>
      <header>
        <nav className="nav">
          <div className="logo" onClick={() => navigate('/')}>GamerHub</div>
          <div className="nav-links">
            <a href="#" onClick={() => navigate('/')}>หน้าหลัก</a>
            <a href="#" onClick={() => navigate('/topup')}>เติมเกม</a>
            <a href="#" onClick={() => navigate('/')}>โปรโมชั่น</a>
            <a href="#" onClick={() => navigate('/')}>ติดต่อเรา</a>
            <button className="purple-btn" onClick={() => navigate('/auth/login')}>เข้าสู่ระบบ</button>
          </div>
        </nav>
      </header>

      <div className="container">
        <h1 className="title">ยืนยันการชำระเงิน</h1>
        <p className="subtitle">
          กรุณาตรวจสอบรายการและเลือกวิธีการชำระเงิน
        </p>

        {/* Game Selection */}
        <div className="game-selection-section">
          <h2 className="section-title">เลือกเกมที่ต้องการเติม</h2>
          <div className="game-selection-grid">
            {games.map((game) => (
              <div
                key={game.id}
                className={`game-selection-card ${selectedGame?.id === game.id ? 'active' : ''}`}
                onClick={() => setSelectedGame(game)}
              >
                <img src={game.image} alt={game.name} className="game-selection-img" />
                <div className="game-selection-info">
                  <h4>{game.name}</h4>
                  <p>{game.desc}</p>
                  <span className="price">฿{game.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="payment-grid">
          {/* Left - Order Summary */}
          <div className="card">
            <div className="card-title">สรุปรายการสั่งซื้อ</div>
            
            <div className="game-info">
              <img 
                src={selectedGame.image} 
                alt={selectedGame.name} 
                className="game-thumbnail" 
              />
              <div>
                <strong>{selectedGame.name}</strong><br />
                <small>{selectedGame.desc}</small>
              </div>
            </div>

            <div className="detail-item">
              <span className="label">เกม:</span>
              <span className="value">{selectedGame.name}</span>
            </div>
            <div className="detail-item">
              <span className="label">แพ็กเกจ:</span>
              <span className="value">500 เพชร + โบนัส 50 เพชร</span>
            </div>
            <div className="detail-item">
              <span className="label">UID:</span>
              <span className="value">2847569123</span>
            </div>
            <div className="detail-item">
              <span className="label">เซิร์ฟเวอร์:</span>
              <span className="value">Thailand</span>
            </div>
            <div className="detail-item total">
              <span className="label">ยอดรวม:</span>
              <span className="value">฿{selectedGame.price}</span>
            </div>
          </div>

          {/* Right - Payment Methods */}
          <div className="card">
            <div className="card-title">เลือกวิธีการชำระเงิน</div>
            
            <div className="payment-methods">
              {paymentMethods.map(method => (
                <div 
                  key={method.id}
                  className={`method ${selectedMethod === method.id ? 'selected' : ''}`}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <span className="method-icon">{method.icon}</span>
                  <span>{method.name}</span>
                </div>
              ))}
            </div>

            <button 
              className="confirm-btn"
              disabled={!selectedMethod}
            >
              ยืนยันการชำระเงิน
            </button>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>เกมยอดนิยม</h4>
              <a href="#">Free Fire</a>
              <a href="#">Mobile Legends</a>
              <a href="#">PUBG Mobile</a>
              <a href="#">ROV</a>
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
            © 2024 GamerHub สงวนลิขสิทธิ์
          </div>
        </div>
      </footer>
    </>
  );
}

export default Payment;