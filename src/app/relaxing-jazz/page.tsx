"use client";

import Channels from "@/app/features/player/Channels";
import ListenerCount from "@/app/features/player/ListenerCount";
import VolumeControl from "@/app/features/player/VolumeControl";
import WaveformVisualizer from "@/app/features/player/WaveformVisualizer";
import PlayButton from "@/app/features/player/PlayButton";
import RadioHeader from "@/app/features/player/RadioHeader";
import { useAudioPlayer } from "@/app/hooks/useAudioPlayer";
import { useVolume } from "@/app/hooks/useVolume";
import { useRandomBackground } from "@/app/hooks/useRandomBackground";
import { useMediaSession } from "@/app/hooks/useMediaSession";
const RelaxingJazz = () => {
  const { isPlaying, isLoading, audioRef, togglePlay } = useAudioPlayer({
    streamUrl: `${process.env.NEXT_PUBLIC_STREAM_URL}/live`,
  });
  const { volume, setVolume } = useVolume({ audioRef });
  const { backgroundImage, isImageLoaded } = useRandomBackground("/images/rain-sound");

  useMediaSession({ togglePlay });

  return (
    <>
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

      <section className="w-full bg-stone-800 text-stone-200 py-20">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-3xl font-bold mb-9">A relaxing music streaming station online</h1>
          <div className="inline-block mb-16 bg-stone-700/50 rounded-lg px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <h2 className="text-xl font-bold bg-gradient-to-r from-stone-200 to-stone-100 bg-clip-text text-transparent">
                Relaxing Jazz
              </h2>
              <span className="text-stone-400">is now playing</span>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">What is Minimal Tune?</h2>
            <p className="text-lg leading-relaxed text-stone-300">
              Minimal Tune offers streaming channels with relaxing music to help you unwind. All channels are available 24/7, always here to
              bring you warmth and comfort.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Keyboard Shortcuts</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-6">
                <kbd className="px-4 py-2 text-sm font-semibold text-stone-700 bg-stone-50 border border-stone-200 rounded-lg shadow-sm">
                  Space
                </kbd>
                <span className="text-lg text-stone-300">Play / Pause music</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RelaxingJazz;
