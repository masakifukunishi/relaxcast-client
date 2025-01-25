import Link from "next/link";
import { MdOutlineLightbulb } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiMeditation } from "react-icons/gi";
import { IoMoonOutline } from "react-icons/io5";
import { TbWaveSine } from "react-icons/tb";

interface SoundCard {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export default function Home() {
  const cards: SoundCard[] = [
    { title: "Focus", path: "/focus", icon: <MdOutlineLightbulb size={40} /> },
    { title: "Relax", path: "/relax", icon: <RiMentalHealthLine size={40} /> },
    { title: "Meditation", path: "/meditation", icon: <GiMeditation size={40} /> },
    { title: "Sleep", path: "/sleep", icon: <IoMoonOutline size={40} /> },
    { title: "White Noise", path: "/white-noise", icon: <TbWaveSine size={40} /> },
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
              <div className="text-white/80">{card.icon}</div>
              <h2 className="text-2xl font-semibold text-center">{card.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
