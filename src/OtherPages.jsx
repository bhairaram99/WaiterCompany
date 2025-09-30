export default function OtherPages({ title = 'Page' }) {
  return (
    <div className="p-6">
      <h1 className="text-[24px] font-semibold mb-2">{title}</h1>
      <p className="text-accent-brown">This is the {title} page.</p>
    </div>
  );
}

