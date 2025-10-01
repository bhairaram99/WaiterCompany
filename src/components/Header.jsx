import { Bell, UserCircle2, ChevronDown } from "lucide-react";
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
      <h1 className="text-[32px] leading-[40px] tracking-[-1px] font-semibold">Welcome Back, Manager</h1>
      <div className="flex gap-2 items-center">
        {/* Smart Cafe Dropdown */}
        <button className="flex items-center gap-1 border bg-white rounded-lg px-2 py-1 text-sm shadow-md">
          Smart Cafe <ChevronDown className="w-4 h-4" />
        </button>
        {/* Notification Bell */}
        <button className="border-none bg-white rounded-full p-2 shadow-md">
          <Bell className="w-6 h-6 text-accent-brown" />
        </button>
        {/* Profile Avatar Icon */}
        <button onClick={() => setOpen(v => !v)} className="border-none bg-white rounded-full p-2 shadow-md">
          <UserCircle2 className="w-6 h-6 text-primary-dark" />
        </button>
      </div>

      {open ? (
        <div ref={menuRef} className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg border p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-light-bg flex items-center justify-center">
              <UserCircle2 className="w-6 h-6 text-primary-dark" />
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
