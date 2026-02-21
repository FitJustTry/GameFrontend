// src/pages/PopularGames.jsx
import { useNavigate } from 'react-router-dom';

export default function PopularGames() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ff0000, #ff8800)',
      color: 'white',
      padding: '50px',
      textAlign: 'center',
      fontSize: '2rem'
    }}>
      <h1>TEST PAGE: PopularGames ทำงานแล้ว!</h1>
      <p>ถ้าเห็นพื้นแดง-ส้มนี้ แสดงว่า route ถูกต้อง แต่ถ้ายังม่วง = route ยังไม่ match</p>
      <button 
        onClick={() => navigate('/')}
        style={{ padding: '15px 30px', fontSize: '1.2rem', marginTop: '30px' }}
      >
        กลับหน้าหลัก
      </button>
    </div>
  );
}

// src/main.jsx (หรือ index.jsx)
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // หรือไฟล์ css หลักของคุณ

// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// ลอง import แบบนี้ก่อน (แนะนำอันนี้)
import PopularGames from './pages/PopularGames'  // ไม่ต้อง .jsx ท้าย

// หรือลองแบบเต็มถ้าอันบนไม่ขึ้น
// import PopularGames from './pages/PopularGames.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PopularGames />  // render ตรง ๆ เพื่อ test
  </React.StrictMode>
)