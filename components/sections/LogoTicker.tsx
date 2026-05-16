const tickerLogos = [
  { src: "/ticker-logo-1.svg", alt: "Cliente Appreach", width: 174, height: 31 },
  { src: "/ticker-logo-2.svg", alt: "Cliente Appreach", width: 86, height: 35 },
  { src: "/ticker-logo-3.svg", alt: "Cliente Appreach", width: 108, height: 49 },
  { src: "/ticker-logo-4.svg", alt: "Cliente Appreach", width: 76, height: 29 },
  { src: "/ticker-logo-5.svg", alt: "Cliente Appreach", width: 181, height: 32 },
];

export default function LogoTicker() {
  const doubled = [...tickerLogos, ...tickerLogos];

  return (
    <section className="bg-white pt-24 pb-14">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16 flex flex-col gap-8 items-center">

        {/* Texto */}
        <p
          className="font-medium text-dark"
          style={{ fontSize: "22px", letterSpacing: "-0.5px" }}
        >
          +200 apps escalados com a Appreach
        </p>

        {/* Ticker */}
        <div className="relative overflow-hidden w-full">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10"
            style={{ width: "80px", background: "linear-gradient(to right, #fff, transparent)" }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10"
            style={{ width: "80px", background: "linear-gradient(to left, #fff, transparent)" }}
          />
          <div className="ticker-track items-center" style={{ gap: "72px" }}>
            {doubled.map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="shrink-0 object-contain"
                style={{ filter: "brightness(0)" }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
