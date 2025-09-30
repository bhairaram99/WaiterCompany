import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ["#8E726E", "#0BA52A"];

function renderPercentageBadge({ cx, cy, midAngle, outerRadius, percent }) {
  const RAD = Math.PI / 180;
  const radius = outerRadius + 16;
  const x = cx + radius * Math.cos(-midAngle * RAD);
  const y = cy + radius * Math.sin(-midAngle * RAD);
  const label = `${Math.round(percent * 100)}%`;
  const paddingX = 8;
  const paddingY = 4;
  const estWidth = label.length * 6 + paddingX * 2; // rough text width estimate
  const estHeight = 18;
  return (
    <g transform={`translate(${x - estWidth / 2}, ${y - estHeight / 2})`}>
      <rect width={estWidth} height={estHeight} rx={9} ry={9} fill="#F7F4F3" stroke="#E8DDDC" />
      <text x={estWidth / 2} y={estHeight / 2 + 4} textAnchor="middle" fill="#8E726E" fontSize="12">{label}</text>
    </g>
  );
}

export default function CustomerTraffic({ data }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-bold text-[18px]">Customer Traffic</span>
        <span className="text-xs border rounded px-2 py-1 text-primary-dark bg-light-bg">Today</span>
      </div>
      <div className="relative flex flex-col items-center">
        <ResponsiveContainer width={180} height={200}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%" cy="50%"
              innerRadius={55}
              outerRadius={80}
              startAngle={90}
              endAngle={-270}
              labelLine={false}
              label={renderPercentageBadge}
            >
              {data.map((entry, idx) => (
                <Cell key={entry.name} fill={COLORS[idx]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* Center text and percent overlays */}
        <div className="absolute top-[70px] left-0 w-full flex flex-col items-center">
          <span className="font-bold text-primary-dark text-xl">8,000</span>
          <span className="text-green text-xs">+10% vs yesterday</span>
          <span className="text-accent-brown text-xs">Total Customers</span>
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-2 text-[14px]">
        <span className="flex gap-1 items-center text-accent-brown">
          <span className="w-3 h-3 rounded bg-accent-brown inline-block" />New Customers 25%
        </span>
        <span className="flex gap-1 items-center text-green">
          <span className="w-3 h-3 rounded bg-green inline-block" />Repeated 75%
        </span>
      </div>
    </div>
  );
}
