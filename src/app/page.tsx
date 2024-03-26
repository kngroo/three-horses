import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-white">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/three-horses-logo.jpeg"
        alt="Three Horses Logo"
        width={180}
        height={37}
        priority
      />
      <h1>Pouring soon...</h1>
    </main>
  );
}
