import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import RevenueChart from './components/RevenueChart';
import CustomerTraffic from './components/CustomerTraffic';
import TrendingItems from './components/TrendingItems';
import RushHours from './components/RushHours';
import { FileText, FileCheck2, FileClock, FileX, Calendar as CalendarIcon } from 'lucide-react';
import { Outlet, Link } from 'react-router-dom';
import {
  revenueData,
  customerTraffic,
  trendingItems,
  rushHours
} from './data';

export default function App() {
  return (
    <div className="bg-light-bg min-h-screen flex">
      <Sidebar />
      <main className="flex-1 ml-16 md:ml-56 p-6">
        <Header />
        <div className="border-t border-muted-pink mb-4"></div>
        {/* Section header: Today's Performance with date selector */}
        {/* Nested routes render here */}
        <Outlet />
      </main>
    </div>
  );
}
