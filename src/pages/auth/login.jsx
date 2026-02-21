import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    navigate('/');
  };

  return (
    <>
      <header>
        <nav className="nav">
          <div className="logo" onClick={() => navigate('/')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:8}}>
              <path d="M21 11.5a3 3 0 0 0-3-3h-1.5" />
              <path d="M3 11.5a3 3 0 0 1 3-3h1.5" />
              <path d="M12 22v-6" />
              <circle cx="12" cy="7" r="3" />
            </svg>
            GamerHub
          </div>
          <div className="nav-links">
            <button onClick={() => navigate('/')} className="nav-link">หน้าหลัก</button>
            <button onClick={() => navigate('/')} className="nav-link">เติมเกม</button>
            <button onClick={() => navigate('/')} className="nav-link">โปรโมชั่น</button>
            <button onClick={() => navigate('/')} className="nav-link">ติดต่อเรา</button>
            <button onClick={() => navigate('/auth/login')} className="nav-link active-btn">เข้าสู่ระบบ</button>
          </div>
        </nav>
      </header>

      <div className="login-container">
        <div className="login-box">
          <h1>ยินดีต้อนรับ
          </h1>
          <p className="subtitle">เข้าสู่ระบบเพื่อเติมเกมและติดตามการใช้งาน</p>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                placeholder="กรุณาป้อนอีเมลของคุณ"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="กรุณาป้อนรหัสผ่านของคุณ"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" className="show-password">👁️</button>
            </div>

            <div className="remember-section">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                จดจำรหัสผ่าน
              </label>
              <a href="#" className="forgot-password">ลืมรหัสผ่านหรือ?</a>
            </div>

            <button type="submit" className="login-btn">เข้าสู่ระบบ</button>
          </form>

          <div className="divider">
            <span>หรือเข้าสู่ระบบด้วย</span>
          </div>

          <div className="social-login">
            <button className="social-btn google">
              <span>G</span>
            </button>
            <button className="social-btn facebook">
              <span>f</span>
            </button>
            <button className="social-btn instagram">
              <span>📷</span>
            </button>
          </div>

          <p className="signup-link">
            สร้างบัญชีใหม่ <a href="#">ลงทะเบียน</a>
          </p>
        </div>

        <div className="security-info">
          🛡️ ระบบความปลอดภัย SSL 256-bit
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
              <a href="#">📱 @gamerhubth</a>
              <a href="#">💜 GamerHub-Thailand</a>
              <a href="#">💎 GamerHub-Discord</a>
              <a href="#">✉️ support@gamerhub.com</a>
            </div>
          </div>
          <div className="copyright">
            © 2024 GamerHub สงวนลิขสิทธิ์ | ข้อมูลอ่านเพิ่มเติม | นโยบายการ
          </div>
        </div>
      </footer>
    </>
  );
}

export default Login;
