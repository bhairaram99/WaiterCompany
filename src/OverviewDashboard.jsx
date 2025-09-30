import RevenueChart from './components/RevenueChart';
import CustomerTraffic from './components/CustomerTraffic';
import TrendingItems from './components/TrendingItems';
import RushHours from './components/RushHours';
import StatCard from './components/StatCard';
import { FileText, FileCheck2, FileClock, FileX, Calendar as CalendarIcon } from 'lucide-react';
import { revenueData, customerTraffic, trendingItems, rushHours } from './data';

export default function OverviewDashboard() {
  return (
    <>
      {/* divider removed for single clean header area */}

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[16px] font-semibold">Today's Performance</h2>
        <button className="flex items-center gap-2 border bg-white rounded-lg px-3 py-1 text-sm shadow-md">
          <CalendarIcon className="w-4 h-4 text-accent-brown" />
          <span>Sep 15, 2025</span>
        </button>
      </div>

      {/* TOP: revenue + 4 stat cards in one grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-md p-4 h-full">
            <RevenueChart data={revenueData} />
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 h-full">
            <StatCard title="Total Orders" value={202} Icon={FileText} badgeText="10 orders" />
            <StatCard title="Completed Orders" value={190} Icon={FileCheck2} badgeText="10 orders" />
            <StatCard title="Pending Orders" value={10} Icon={FileClock} badgeText="10 orders" />
            <StatCard title="Cancelled Orders" value={190} Icon={FileX} badgeText="10 orders" />
          </div>
        </div>
      </div>

      {/* BOTTOM: three charts in one grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white rounded-2xl shadow-md p-4">
          <CustomerTraffic data={customerTraffic} />
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4">
          <TrendingItems data={trendingItems} />
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4">
          <RushHours data={rushHours} />
        </div>
      </div>
    </>
  );
}

