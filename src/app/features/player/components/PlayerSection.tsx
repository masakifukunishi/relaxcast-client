"use client";

import VolumeControl from "@/app/features/player/components/VolumeControl";
import WaveformVisualizer from "@/app/features/player/components/WaveformVisualizer";
import PlayButton from "@/app/features/player/components/PlayButton";
import RadioHeader from "@/app/features/player/components/RadioHeader";
import ListenerCount from "@/app/features/player/components/ListenerCount";
import Channels from "@/app/features/player/components/Channels";
import { useAudioPlayer } from "@/app/features/player/hooks/useAudioPlayer";
import { useVolume } from "@/app/features/player/hooks/useVolume";
import { useRandomBackground } from "@/app/features/player/hooks/useRandomBackground";
import { useMediaSession } from "@/app/features/player/hooks/useMediaSession";
import { formatChannelName } from "@/app/utils/format";

interface PlayerSectionProps {
  channel: string;
}

const PlayerSection = ({ channel }: PlayerSectionProps) => {
  const { isPlaying, isLoading, audioRef, togglePlay } = useAudioPlayer({
    streamUrl: `${process.env.NEXT_PUBLIC_STREAM_URL}/live`,
  });
  const { volume, setVolume } = useVolume({ audioRef });
  const { backgroundImage, isImageLoaded } = useRandomBackground(`/images/${channel}`);

  useMediaSession({ togglePlay });

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center">
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-500 ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/50" />
      <div className="w-full max-w-2xl px-8 py-12 relative z-10">
        <audio ref={audioRef} />
        <div className="mb-8">
          <RadioHeader isLoading={isLoading} subtitle={formatChannelName(channel)} />
          <WaveformVisualizer isPlaying={isPlaying} />
          <div className="flex flex-col items-center gap-8">
            <PlayButton isPlaying={isPlaying} isLoading={isLoading} onClick={togglePlay} />
            <VolumeControl volume={volume} onChange={setVolume} />
          </div>
        </div>
        <ListenerCount />
        <Channels />
      </div>
    </div>
  );
};

export default PlayerSection;
