import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, CartesianGrid } from 'recharts';

function renderTopBadge(maxValue) {
  return (props) => {
    const { x, y, width, value } = props;
    if (value !== maxValue) return null;
    const label = `${Math.round(value / 100) / 10}k`;
    const pillW = label.length * 8 + 16;
    const pillH = 20;
    const tx = (x ?? 0) + (width ?? 0) / 2 - pillW / 2;
    const ty = (y ?? 0) - pillH - 6;
    return (
      <g transform={`translate(${tx}, ${ty})`}>
        <rect width={pillW} height={pillH} rx={6} ry={6} fill="#FFFFFF" stroke="#E8DDDC" />
        <text x={pillW / 2} y={pillH / 2 + 4} textAnchor="middle" fill="#8E726E" fontSize="12">{label}</text>
      </g>
    );
  };
}

export default function TrendingItems({ data }) {
  const maxValue = Math.max(...data.map(d => d.value));
  return (
    <div>
      <span className="font-bold text-heading-xs mb-2 block">Trending Items</span>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barCategoryGap="28%">
          <CartesianGrid vertical={false} stroke="#F0EAE9" strokeDasharray="3 3" />
          <XAxis dataKey="name" style={{ fontSize: 12 }} />
          <YAxis style={{ fontSize: 12 }} tickFormatter={(v) => `${Math.round(v/1000)}k`} />
          <Tooltip />
          <Bar dataKey="value" fill="#B18E8A" radius={[8, 8, 0, 0]}>
            <LabelList dataKey="value" content={renderTopBadge(maxValue)} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
