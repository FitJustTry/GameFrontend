import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/home/home"
import Menu from "./layouts/menu"
import Payment from "./pages/payments/payment"
import Topup from "./pages/topup/topup"
import Login from "./pages/auth/login"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/auth/login" element={<Login />} />
        <Route element={<Menu />}>
          <Route path="/topup" element={<Topup />} />
        </Route>
      </Routes>
    </>
  )
}

export default App