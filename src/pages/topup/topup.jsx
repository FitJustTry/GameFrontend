import { useLocation, useNavigate } from 'react-router-dom'
import './topup.css'

export default function Topup(){
  const navigate = useNavigate()
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const item = params.get('item') || params.get('game') || ''

  return (
    <div className="topup-container">
      <header className="topup-header">
        <h1>เติมเลย</h1>
        <button className="btn-back" onClick={() => navigate(-1)}>ย้อนกลับ</button>
      </header>

      <div className="topup-card">
        <div className="topup-info">
          <h2>{item || 'เลือกไอเท็มที่ต้องการเติม'}</h2>
          <p>กรุณากรอกข้อมูลการเติมและเลือกช่องทางการชำระเงิน</p>
        </div>

        <div className="topup-form">
          <label>ไอดีผู้เล่น / UID</label>
          <input placeholder="กรอกไอดีหรือ UID" />

          <label>จำนวน</label>
          <input placeholder="จำนวน" type="number" />

          <label>ช่องทางการชำระ</label>
          <select>
            <option>QR PromptPay</option>
            <option>TrueMoney Wallet</option>
            <option>Mobile Banking</option>
            <option>ShopeePay</option>
            <option>Credit/Debit Card</option>
          </select>

          <div className="topup-actions">
            <button className="btn-primary" onClick={() => navigate('/payments')}>ไปชำระเงิน</button>
            <button className="btn-outline" onClick={() => navigate('/')}>กลับไปหน้าแรก</button>
          </div>
        </div>
      </div>
    </div>
  )
}
