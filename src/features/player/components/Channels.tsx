"use client";
import { Waves, Umbrella, AudioLines, Flame } from "lucide-react";
import { formatChannelName } from "@/utils/format";
import Link from "next/link";
import { usePathname } from "next/navigation";

const channels = [
  { name: "ocean-sounds", icon: <Waves className="w-4 h-4" /> },
  { name: "rain-sounds", icon: <Umbrella className="w-4 h-4" /> },
  { name: "fireplace-sounds", icon: <Flame className="w-4 h-4" /> },
  { name: "brown-noise", icon: <AudioLines className="w-4 h-4" /> },
];

const Channels = () => {
  const pathname = usePathname();

  return (
    <div className="pt-8 border-t border-stone-800 flex flex-col items-center">
      <h3 className="text-sm text-stone-300 mb-4 text-center [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">Channels</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center w-full max-w-sm">
        {channels.map((channel) => {
          const isActive = pathname === `/${channel.name}` || (pathname === "/" && channel.name === "ocean-sounds");
          return (
            <Link
              key={channel.name}
              href={channel.name === "ocean-sounds" ? "/" : `/${channel.name}`}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 w-56 md:w-44 justify-center [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)] ${
                isActive ? "bg-amber-900/40 text-amber-200" : "hover:bg-stone-800/50 text-stone-300"
              }`}
            >
              {channel.icon}
              <span className="text-sm">{formatChannelName(channel.name)}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Channels;
