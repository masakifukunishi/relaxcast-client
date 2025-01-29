"use client";

import React, { useState, useEffect, useRef } from "react";
import Channels from "@/features/components/common/Channels";
import ListenerCount from "@/features/components/common/ListenerCount";
import VolumeControl from "@/features/components/common/VolumeControl";
import WaveformVisualizer from "@/features/components/common/WaveformVisualizer";
import PlayButton from "@/features/components/common/PlayButton";
import RadioHeader from "@/features/components/common/RadioHeader";

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [time, setTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

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

  const togglePlay = () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    const shouldStartPlaying = !isPlaying;

    if (shouldStartPlaying && audio.src === "") {
      setIsLoading(true);
      audio.src = "http://localhost:8000/live";

      audio.addEventListener("canplay", () => {
        setIsLoading(false);
      });

      audio.addEventListener("error", () => {
        setIsLoading(false);
      });
    }

    shouldStartPlaying ? audio.play() : audio.pause();
    setIsPlaying(shouldStartPlaying);
  };

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
