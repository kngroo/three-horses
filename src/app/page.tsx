import Instagram from "./instagram";

export default function Home() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed min-h-full min-w-full right-1/2 top-0 max-w-none translate-x-1/2"
      >
        <source src="/moto.mp4" type="video/mp4" />
      </video>
      <main className="whitespace-nowrap relative uppercase flex flex-col items-center justify-center [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)] select-none top-1/4 sm:h-full sm:top-0">
        <h1 className="text-2xl sm:text-3xl">Three Horses</h1>
        <p className="text-4xl sm:text-5xl">Pouring Soon</p>
        <h2 className="text-lg sm:text-xl mt-1">Cafe & Speed Shop</h2>

        <address className="text-center mt-5 not-italic">
          <h3 className="text-lg sm:text-xl">
            <a
              className="hover:underline"
              href="https://maps.app.goo.gl/rM8onc3vVnmvAodc9"
              target="_blank"
            >
              1250 Dupont St Toronto
            </a>
          </h3>
          <a
            className="text-sm mt-2 hover:underline"
            href="mailto:info@threehorses.cafe"
          >
            Contact Us
          </a>
        </address>
        <Instagram className="inline-block mt-10 drop-shadow-lg" />
      </main>
    </>
  );
}
