import {
  Home, LayoutGrid, List, Utensils, LineChart, FileText, Calendar, LogOut, HelpCircle
} from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: "Overview", icon: Home },
  { name: "Tables", icon: LayoutGrid },
  { name: "Menu", icon: List },
  { name: "Inventory", icon: Utensils },
  { name: "Sales", icon: LineChart },
  { name: "Reports", icon: FileText },
  { name: "Calendar", icon: Calendar },
];

export default function Sidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    const ok = window.confirm('Are you sure you want to log out?');
    if (!ok) return;
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch {}
    navigate('/');
  }

  return (
    <aside className="fixed top-0 left-0 h-full bg-soft-brown w-16 md:w-56 flex flex-col justify-between">
      <div>
        <div className="px-4 py-6 flex items-center">
          <img src="/waitercompanylogo.png" alt="The Waiter Company" className="h-15 md:h-20 w-auto object-contain" />
        </div>
        <nav>
          <ul className="space-y-1 px-2">
            {navLinks.map(({ name, icon: Icon }) => {
              const path = name === 'Overview' ? '/' : `/${name.toLowerCase()}`;
              return (
                <li key={name}>
                  <Link to={path} className="flex items-center gap-4 px-2 py-2 hover:bg-light-bg text-primary-dark rounded-xl transition-all">
                    <Icon className="w-6 h-6" />
                    <span className="hidden md:inline font-medium">{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* Bottom Help and Logout: fixed */}
      <div className="w-full px-2 py-4 absolute bottom-0 left-0 flex flex-col gap-1">
        <Link to="/help" className="flex items-center gap-4 px-2 py-2 text-primary-dark hover:bg-light-bg rounded-xl">
          <HelpCircle className="w-6 h-6" />
          <span className="hidden md:block">Help</span>
        </Link>
        <button onClick={handleLogout} className="flex items-center gap-4 px-2 py-2 text-red hover:bg-muted-red rounded-xl">
          <LogOut className="w-6 h-6" />
          <span className="hidden md:block">Log Out</span>
        </button>
      </div>
    </aside>
  );
}
