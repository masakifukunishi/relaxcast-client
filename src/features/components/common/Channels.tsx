import { Piano, Umbrella, Waves } from "lucide-react";
import { formatChannelName } from "@/app/utils/format";

interface ChannelsProps {
  activeChannel: string;
  onChannelChange: (channelName: string) => void;
}

const channels = [
  { name: "jazz-music", icon: <Piano className="w-4 h-4" /> },
  { name: "rain-sound", icon: <Umbrella className="w-4 h-4" /> },
  { name: "white-noise", icon: <Waves className="w-4 h-4" /> },
];

const Channels = ({ activeChannel, onChannelChange }: ChannelsProps) => {
  return (
    <div className="pt-8 border-t border-stone-800">
      <h3 className="text-sm text-stone-300 mb-4 text-center [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">Channels</h3>
      <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
        {channels.map((channel) => (
          <button
            key={channel.name}
            onClick={() => onChannelChange(channel.name)}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg transition-all duration-300 w-48 md:w-auto justify-center [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)] ${
              activeChannel === channel.name ? "bg-amber-900/40 text-amber-200" : "hover:bg-stone-800/50 text-stone-300"
            }`}
          >
            {channel.icon}
            <span className="text-sm">{formatChannelName(channel.name)}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Channels;
