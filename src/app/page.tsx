import Link from "next/link";

interface SoundCard {
  title: string;
  path: string;
}

export default function Home() {
  const cards: SoundCard[] = [
    { title: "Focus", path: "/focus" },
    { title: "Relax", path: "/relax" },
    { title: "Meditation", path: "/meditation" },
    { title: "Sleep", path: "/sleep" },
    { title: "White Noise", path: "/white-noise" },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <div className="flex flex-col items-center gap-2 mb-12 mt-24">
        <h1 className="text-4xl font-bold">Minimal Tune</h1>
        <h2 className="text-xl font-bold">Minimal Background music player</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-7xl">
        {cards.map((card) => (
          <Link
            key={card.path}
            href={card.path}
            className="bg-white/10 hover:bg-white/20 rounded-lg p-6 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-semibold text-center">{card.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
