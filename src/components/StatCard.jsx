export default function StatCard({ title, value, subtext, color, Icon, badgeText, badgeColor }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 md:p-5 flex flex-col gap-2 min-w-[150px] mb-4 h-[150px]">
      <div className="flex items-start justify-between">
        {Icon ? <Icon className="w-6 h-6 text-primary-brown" /> : <span />}
        {badgeText ? (
          <span 
            className="text-[11px] px-2 py-0.5 rounded-full whitespace-nowrap"
            style={{
              backgroundColor: badgeColor === 'green' ? '#DAF7E2' : '#FFECEC',
              color: badgeColor === 'green' ? '#0BA52A' : '#D73F3F',
              border: `1px solid ${badgeColor === 'green' ? '#0BA52A' : '#D73F3F'}`
            }}
          >
            {badgeText}
          </span>
        ) : null}
      </div>
      <div className="text-accent-brown font-medium text-text-s mt-2">{title}</div>
      <div className="text-primary-dark text-heading-m font-bold">{value}</div>
      {subtext ? (
        <div className={`text-text-xs ${color || 'text-soft-green'}`}>{subtext}</div>
      ) : null}
      <button className="text-[#d2c6c5] text-text-xs text-left -mt-1">View more</button>
    </div>
  );
}
