import "./menu.css";
import { NavLink, Outlet } from "react-router-dom";
import { CreditCard } from "lucide-react";

const menus = [
  { name: "Payments", path: "/payments", icon: CreditCard },
];

export default function Menu() {
  return (
    <div className="app">
      <main className="main fullwidth">
        <header className="topbar">
          <div className="container topbar-inner">
            <div className="brand">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:8}}>
                <path d="M21 11.5a3 3 0 0 0-3-3h-1.5" />
                <path d="M3 11.5a3 3 0 0 1 3-3h1.5" />
                <path d="M12 22v-6" />
                <circle cx="12" cy="7" r="3" />
              </svg>
              <span>GamerHub</span>
              <div className="brand-sub">เติมเกมออนไลน์</div>
            </div>

            <nav className="topnav">
              <button className="nav-link" onClick={() => window.location.replace('/')}>หน้าแรก</button>
              <button className="nav-link" onClick={() => window.location.replace('/topup')}>เติมเกม</button>
              <button className="nav-link" onClick={() => window.location.replace('/')}>โปรโมชั่น</button>
              <button className="nav-link" onClick={() => window.location.replace('/')}>ติดต่อเรา</button>
              <button className="btn-login" onClick={() => window.location.replace('/payments')}>เข้าสู่ระบบ</button>
            </nav>
          </div>
        </header>

        <Outlet />
      </main>
    </div>
  )
}