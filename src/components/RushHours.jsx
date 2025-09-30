import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function RushHours({ data }) {
  return (
    <div>
      <span className="font-bold text-[18px] mb-2 block">Customer Rush Hours</span>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
          <XAxis dataKey="time" style={{ fontSize: 12 }} />
          <YAxis style={{ fontSize: 12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="customers" stroke="#8AB19A" strokeWidth={2} dot={{ r: 3, stroke: '#8AB19A', strokeWidth: 2, fill: '#FFFFFF' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
