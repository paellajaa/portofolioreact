// src/components/Ticker.jsx
// Infinite marquee banner — Lego yellow background

const tickerItems = [
  'BUILD', 'CODE', 'DESIGN', 'UI/UX',
  'BUILD', 'CODE', 'DESIGN', 'UI/UX',
  'BUILD', 'CODE', 'DESIGN', 'UI/UX',
  'BUILD', 'CODE', 'DESIGN', 'UI/UX',
];

const Gear = () => (
  <span className="text-black font-mono text-base select-none" aria-hidden>⚙️</span>
);

export default function Ticker() {
  return (
    <div className="bg-lego-yellow border-y-2 border-black overflow-hidden py-2 select-none">
      <div className="ticker-track">
        {/* Duplicate for seamless loop */}
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span key={i} className="flex items-center gap-3 mx-3">
            <span className="font-mono font-bold text-sm uppercase tracking-widest text-black">
              {item}
            </span>
            <Gear />
          </span>
        ))}
      </div>
    </div>
  );
}
