"use client";
import { Piano, Umbrella, Waves } from "lucide-react";
import { formatChannelName } from "@/utils/format";
import Link from "next/link";
import { usePathname } from "next/navigation";

const channels = [
  { name: "relaxing-jazz", icon: <Piano className="w-4 h-4" /> },
  { name: "rain-sounds", icon: <Umbrella className="w-4 h-4" /> },
  { name: "brown-noise", icon: <Waves className="w-4 h-4" /> },
];

const Channels = () => {
  const pathname = usePathname();

  return (
    <div className="pt-8 border-t border-stone-800">
      <h3 className="text-sm text-stone-300 mb-4 text-center [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">Channels</h3>
      <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
        {channels.map((channel) => {
          const isActive = pathname === `/${channel.name}`;

          return (
            <Link
              key={channel.name}
              href={`/${channel.name}`}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg transition-all duration-300 w-80 md:w-40 justify-center [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)] ${
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
