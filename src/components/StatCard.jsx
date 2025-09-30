export default function StatCard({ title, value, subtext, color, Icon, badgeText }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 md:p-5 flex flex-col gap-2 min-w-[150px] mb-4 h-[150px]">
      <div className="flex items-start justify-between">
        {Icon ? <Icon className="w-6 h-6 text-primary-brown" /> : <span />}
        {badgeText ? (
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-muted-red text-soft-red border border-soft-red whitespace-nowrap">{badgeText}</span>
        ) : null}
      </div>
      <div className="text-accent-brown font-medium text-[14px] leading-[20px] mt-2">{title}</div>
      <div className="text-primary-dark text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] tracking-[-1px] font-bold">{value}</div>
      {subtext ? (
        <div className={`text-xs ${color || 'text-soft-green'}`}>{subtext}</div>
      ) : null}
      <button className="text-[#d2c6c5] text-xs text-left -mt-1">View more</button>
    </div>
  );
}
