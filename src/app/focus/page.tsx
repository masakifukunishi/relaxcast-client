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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4">
      <div className="relative bg-slate-900/80 backdrop-blur-sm p-8 rounded-lg shadow-2xl max-w-md w-full border border-cyan-500/10">
        <audio ref={audioRef} />
        <div className="absolute inset-0 -z-10 bg-cyan-500/10 blur-3xl rounded-full" />

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-4 text-cyan-400 animate-pulse">Minimal Tune</h1>
          <div className="flex items-center justify-center gap-2 mb-6 text-cyan-400/80">
            <Users className="w-4 h-4" />
            <span className="text-sm">99 people listening now</span>
          </div>
          <h2 className="text-xl font-semibold text-center text-cyan-400 mt-2 mb-4">
            <span className="flex items-center justify-center gap-2">
              {isLoading ? (
                <span className="text-cyan-400/80 text-base">
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
                className="w-2 bg-cyan-400 rounded-full transition-all duration-200"
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
              className={`w-20 h-20 flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 transition-colors duration-300 text-slate-900 shadow-lg shadow-cyan-500/30 relative ${
                isPlaying ? "opacity-70" : ""
              }`}
            >
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-4 border-slate-900/20 border-t-slate-900 animate-spin" />
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
                className="w-24 accent-cyan-400"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <h3 className="text-sm text-slate-400 mb-4 text-center">Channels</h3>
          <div className="grid grid-cols-2 gap-2">
            {channels.map((channel) => (
              <button
                key={channel.name}
                onClick={() => setActiveChannel(channel.name)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeChannel === channel.name ? "bg-cyan-500/20 text-cyan-400" : "hover:bg-slate-800/50 text-slate-400"
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
