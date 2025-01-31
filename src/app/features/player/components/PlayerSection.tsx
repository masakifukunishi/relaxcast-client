"use client";

import VolumeControl from "./VolumeControl";
import WaveformVisualizer from "./WaveformVisualizer";
import PlayButton from "./PlayButton";
import RadioHeader from "./RadioHeader";
import ListenerCount from "./ListenerCount";
import Channels from "./Channels";
import { useAudioPlayer } from "../hooks/useAudioPlayer";
import { useVolume } from "../hooks/useVolume";
import { useRandomBackground } from "../hooks/useRandomBackground";
import { useMediaSession } from "../hooks/useMediaSession";

const PlayerSection = () => {
  const { isPlaying, isLoading, audioRef, togglePlay } = useAudioPlayer({
    streamUrl: `${process.env.NEXT_PUBLIC_STREAM_URL}/live`,
  });
  const { volume, setVolume } = useVolume({ audioRef });
  const { backgroundImage, isImageLoaded } = useRandomBackground("/images/rain-sound");

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
          <RadioHeader isLoading={isLoading} subtitle="Relaxing Jazz" />
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
