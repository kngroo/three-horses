import Instagram from "./instagram";

export default function Home() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        className="fixed min-h-full min-w-full right-1/2 top-0 max-w-none translate-x-1/2"
      >
        <source src="/moto.mp4" type="video/mp4" />
      </video>
      <main className="relative uppercase flex flex-col items-center justify-center w-full h-full [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">
        <h1>Three Horses</h1>
        <p className="text-3xl">Pouring Soon</p>
        <h2 className="text-sm mt-1">Cafe & Speed Shop</h2>
        <h3 className="text-sm">1250 Dupont St Toronto</h3>
      </main>
      <footer className="absolute bottom-0 w-full text-center">
        <Instagram className="inline-block m-2" />
      </footer>
    </>
  );
}
