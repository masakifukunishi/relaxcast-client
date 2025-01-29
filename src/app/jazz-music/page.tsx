"use client";

import React, { useState, useEffect } from "react";
import Channels from "@/app/features/components/common/Channels";
import ListenerCount from "@/app/features/components/common/ListenerCount";
import VolumeControl from "@/app/features/components/common/VolumeControl";
import WaveformVisualizer from "@/app/features/components/common/WaveformVisualizer";
import PlayButton from "@/app/features/components/common/PlayButton";
import RadioHeader from "@/app/features/components/common/RadioHeader";
import { useAudioPlayer } from "@/app/hooks/useAudioPlayer";

const RadioPlayer = () => {
  const [volume, setVolume] = useState(50);
  const [time, setTime] = useState(0);
  const { isPlaying, isLoading, audioRef, togglePlay } = useAudioPlayer({
    streamUrl: "http://localhost:8000/live",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev + 1) % 100);
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/focus/02.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/60" />
      <div className="w-full max-w-2xl px-8 py-12 relative z-10">
        <audio ref={audioRef} />
        <div className="mb-8">
          <RadioHeader isLoading={isLoading} />
          <WaveformVisualizer isPlaying={isPlaying} time={time} />
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

export default RadioPlayer;
