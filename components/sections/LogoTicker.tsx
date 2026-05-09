const tickerLogos = [
  { src: "/ticker-logo-1.svg", alt: "Cliente Appreach", width: 124, height: 22 },
  { src: "/ticker-logo-2.svg", alt: "Cliente Appreach", width: 61, height: 25 },
  { src: "/ticker-logo-3.svg", alt: "Cliente Appreach", width: 77, height: 35 },
  { src: "/ticker-logo-4.svg", alt: "Cliente Appreach", width: 54, height: 21 },
  { src: "/ticker-logo-5.svg", alt: "Cliente Appreach", width: 129, height: 23 },
];

export default function LogoTicker() {
  const doubled = [...tickerLogos, ...tickerLogos];

  return (
    <section className="bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0 flex flex-col gap-6 items-center">
        <p
          className="font-medium text-center"
          style={{ fontSize: "14px", color: "#a1a1ae", letterSpacing: "0.28px" }}
        >
          +200 CLIENTES ATENDIDOS
        </p>
        <div className="relative overflow-hidden w-full" style={{ maxWidth: "500px" }}>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10"
            style={{ width: "60px", background: "linear-gradient(to right, #fff, transparent)" }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10"
            style={{ width: "60px", background: "linear-gradient(to left, #fff, transparent)" }}
          />
          <div className="ticker-track items-center" style={{ gap: "48px" }}>
            {doubled.map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="shrink-0 object-contain opacity-60"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
