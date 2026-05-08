const logos = [
  { name: "Meta Ads", weight: "500", tracking: "-0.5px" },
  { name: "Google UAC", weight: "500", tracking: "-0.5px" },
  { name: "TikTok Ads", weight: "600", tracking: "-0.5px" },
  { name: "AppsFlyer", weight: "500", tracking: "-0.3px" },
  { name: "adjust", weight: "700", tracking: "0px" },
  { name: "Moloco", weight: "500", tracking: "-0.3px" },
  { name: "Unity Ads", weight: "500", tracking: "-0.3px" },
  { name: "Apple Search Ads", weight: "500", tracking: "-0.3px" },
  { name: "IronSource", weight: "500", tracking: "-0.3px" },
  { name: "Sensor Tower", weight: "500", tracking: "-0.3px" },
];

const Dot = () => (
  <span className="w-1 h-1 rounded-full shrink-0 self-center" style={{ background: "rgba(255,255,255,0.2)" }} />
);

export default function LogoTicker() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-12 overflow-hidden max-w-[800px] mx-auto" style={{ background: "#0A0A12" }}>
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16 mb-8 text-center">
        <p className="font-medium" style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)" }}>
          +50 clientes já atendidos
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10" style={{ background: "linear-gradient(to right, #0A0A12, transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10" style={{ background: "linear-gradient(to left, #0A0A12, transparent)" }} />

        <div className="ticker-track items-center" style={{ gap: "28px" }}>
          {doubled.map((logo, i) => (
            <>
              <span
                key={`logo-${i}`}
                className="shrink-0 whitespace-nowrap text-[18px]"
                style={{
                  fontWeight: logo.weight,
                  letterSpacing: logo.tracking,
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                {logo.name}
              </span>
              <Dot key={`dot-${i}`} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
