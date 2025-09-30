import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function RevenueChart({ data }) {
  return (
    <div className="h-[260px] md:h-[280px] lg:h-[300px]">
      <span className="font-bold text-[18px] mb-2 block">Revenue per hour</span>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="time" style={{ fontSize: 12 }} />
          <YAxis style={{ fontSize: 12 }} />
          <Tooltip />
          <Legend verticalAlign="bottom" height={24}/>
          <Area type="monotone" dataKey="sales" stroke="#C4D8CC" fill="#DAF7E2" />
          <Area type="monotone" dataKey="profit" stroke="#8AB19A" fill="#9EBEAB" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
