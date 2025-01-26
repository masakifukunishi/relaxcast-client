"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, Users, Music2, Zap, Brain, Moon, Wind } from "lucide-react";

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [time, setTime] = useState(0);
  const [activeChannel, setActiveChannel] = useState("Focus Music");
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
      audio.src = "http://localhost:8000/live";
    }

    shouldStartPlaying ? audio.play() : audio.pause();
    setIsPlaying(shouldStartPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      <audio ref={audioRef} />
      <div className="relative bg-slate-900/80 backdrop-blur-sm p-8 rounded-lg shadow-2xl max-w-md w-full border border-cyan-500/10">
        <div className="absolute inset-0 -z-10 bg-cyan-500/10 blur-3xl rounded-full" />

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400 animate-pulse">Minimal Tune</h2>

          <div className="flex items-center justify-center gap-2 mb-6 text-cyan-400/80">
            <Users className="w-4 h-4" />
            <span className="text-sm">99 people listening now</span>
          </div>

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

          <div className="flex items-center justify-center gap-8">
            <button
              onClick={togglePlay}
              className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 transition-colors duration-300 text-slate-900 shadow-lg shadow-cyan-500/30"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
            </button>

            <div className="flex items-center gap-4">
              <Volume2 className="w-6 h-6 text-cyan-400" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-32 accent-cyan-400"
              />
            </div>
          </div>

          <div className="mt-6 text-center text-cyan-400 text-sm">{isPlaying ? "Now Playing" : "Ready to Play"}</div>
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
