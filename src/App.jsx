import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/home"
import Menu from "./layouts/menu"
import Payment from "./pages/payments/payment"
import Topup from "./pages/topup/topup"
import Login from "./pages/auth/login"

// เพิ่ม import ใหม่ (ใช้ชื่อไฟล์ตัวเล็กหมด)
import PopularGames from "./pages/populargames/popularGames";  // ถ้าเป็นโฟลเดอร์ย่อย

// หรือถ้าย้ายไฟล์ออกมาไว้ตรง src/pages/populargames.jsx (ไม่โฟลเดอร์ย่อย)
// import PopularGames from "./pages/populargames";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/auth/login" element={<Login />} />

        {/* กลุ่ม route ที่ใช้ Menu Layout */}
        <Route element={<Menu />}>
          <Route path="/topup" element={<Topup />} />
          {/* เพิ่ม route เกมยอดนิยม */}
          <Route path="/popular-games" element={<PopularGames />} />
        </Route>

        {/* หน้า 404 เพื่อ debug */}
        <Route path="*" element={
          <div style={{ color: 'white', textAlign: 'center', padding: '100px' }}>
            404 - ไม่พบหน้า
          </div>
        } />
      </Routes>
    </>
  )
}

export default App