"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Users, Music2, Zap, Brain, Moon, Wind } from "lucide-react";

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [time, setTime] = useState(0);
  const [activeChannel, setActiveChannel] = useState("Focus Music");
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const channels = [
    { name: "Focus Music", icon: <Zap className="w-4 h-4" /> },
    { name: "Relax Music", icon: <Music2 className="w-4 h-4" /> },
    { name: "Meditation Music", icon: <Brain className="w-4 h-4" /> },
    { name: "Sleep Music", icon: <Moon className="w-4 h-4" /> },
    { name: "White Noise", icon: <Wind className="w-4 h-4" /> },
  ];

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
          <h1 className="text-3xl font-bold text-center mb-4 text-amber-200 [text-shadow:_0_4px_8px_rgba(0,0,0,0.8)]">Minimal Tune</h1>
          <h2 className="text-xl font-semibold text-center text-amber-200 mt-2 mb-4 [text-shadow:_0_3px_6px_rgba(0,0,0,0.8)]">
            <span className="flex items-center justify-center gap-2">
              {isLoading ? (
                <span className="text-amber-200/80 text-base [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
                  Tuning
                  <span>...</span>
                  <span className="text-xs ml-2">{(Math.random() * 100).toFixed(1)} MHz</span>
                </span>
              ) : (
                activeChannel
              )}
            </span>
          </h2>
          <div className="flex justify-center items-center h-20 mb-8 gap-1">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-2 bg-amber-200 rounded-full transition-all duration-200"
                style={{
                  height: isPlaying ? `${20 + Math.sin((time + i * 10) * 0.1) * 20}px` : "4px",
                  opacity: isPlaying ? 0.7 : 0.3,
                }}
              />
            ))}
          </div>

          <div className="flex flex-col items-center gap-8">
            <button
              onClick={togglePlay}
              disabled={isLoading}
              className={`w-20 h-20 flex items-center justify-center rounded-full bg-amber-700 hover:bg-amber-600 transition-colors duration-300 text-amber-100 shadow-lg shadow-amber-900/30 relative ${
                isPlaying ? "opacity-70" : ""
              }`}
            >
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-4 border-amber-100/20 border-t-amber-100 animate-spin" />
                </div>
              ) : isPlaying ? (
                <Pause className="w-10 h-10" />
              ) : (
                <Play className="w-10 h-10 ml-1" />
              )}
            </button>

            <div>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-24 accent-amber-600"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mb-6 font-semibold">
          <Users className="w-4 h-4 text-amber-200/90" />
          <span className="text-amber-200 [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
            <span className="text-lg mr-1">99</span>
            people listening now
            <span className="font-bold text-lg animate-ping ml-1">
              <span>...</span>
            </span>
          </span>
        </div>
        <div className="pt-8 border-t border-stone-800">
          <h3 className="text-sm text-stone-300 mb-4 text-center [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">Channels</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {channels.map((channel) => (
              <button
                key={channel.name}
                onClick={() => setActiveChannel(channel.name)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)] ${
                  activeChannel === channel.name ? "bg-amber-900/40 text-amber-200" : "hover:bg-stone-800/50 text-stone-300"
                }`}
              >
                {channel.icon}
                <span className="text-sm">{channel.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;
