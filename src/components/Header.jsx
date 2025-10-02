import { Bell, UserCircle2, ChevronDown, Calendar as CalendarIcon } from "lucide-react";
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [open]);

  return (
    <header className="flex justify-between items-center py-6 relative">
      <h1 className="text-heading-m font-semibold">Welcome Back, Manager</h1>
      <div className="flex gap-2 items-center">
        {/* Smart Cafe Dropdown */}
        <button className="flex items-center gap-1 border bg-white rounded-lg px-2 py-1 text-sm shadow-md">
          Smart Cafe <ChevronDown className="w-4 h-4" />
        </button>
        {/* Calendar Date */}
        <button className="flex items-center gap-2 border bg-white rounded-lg px-3 py-1 text-sm shadow-md">
          <CalendarIcon className="w-4 h-4 text-figma-brown-light" />
          <span>Sep 15, 2025</span>
        </button>
        {/* Notification Bell */}
        <button className="border-none bg-white rounded-full p-2 shadow-md relative">
          <Bell className="w-6 h-6 text-figma-brown-light" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-figma-red rounded-full"></span>
        </button>
        {/* Profile Avatar Icon */}
        <button onClick={() => setOpen(v => !v)} className="border-none bg-white rounded-full p-2 shadow-md">
          <UserCircle2 className="w-6 h-6 text-figma-brown-medium" />
        </button>
      </div>

      {open ? (
        <div ref={menuRef} className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg border p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-figma-bg-light flex items-center justify-center">
              <UserCircle2 className="w-6 h-6 text-figma-brown-medium" />
            </div>
            <div>
              <div className="font-semibold text-primary-dark">priyanshu Manager</div>
              <div className="text-xs text-accent-brown">priyanshu.manager@example.com</div>
            </div>
          </div>
          <div className="text-sm text-primary-brown">
            <div className="flex justify-between py-1"><span>Role</span><span className="font-medium">Store Manager</span></div>
            <div className="flex justify-between py-1"><span>Location</span><span className="font-medium">Smart Cafe</span></div>
            <div className="flex justify-between py-1"><span>Member since</span><span className="font-medium">2023</span></div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
