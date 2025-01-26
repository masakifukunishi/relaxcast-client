"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, Volume2, Users, Zap, Brain, Coffee, Timer, Sparkles } from "lucide-react";

const FocusPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [time, setTime] = useState(0);
  const [listeners, setListeners] = useState(0);
  const [activeChannel, setActiveChannel] = useState("Deep Focus");

  const channels = [
    { name: "Deep Focus", icon: <Brain className="w-4 h-4" /> },
    { name: "Study Beats", icon: <Coffee className="w-4 h-4" /> },
    { name: "Flow State", icon: <Zap className="w-4 h-4" /> },
    { name: "Productivity", icon: <Timer className="w-4 h-4" /> },
    { name: "Concentration", icon: <Sparkles className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev + 1) % 100);
    }, 50);

    const listenerTimer = setInterval(() => {
      setListeners(Math.floor(Math.random() * 500 + 1000));
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(listenerTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative bg-slate-900/80 backdrop-blur-sm p-8 rounded-lg shadow-2xl max-w-md w-full border border-indigo-500/10">
        <div className="absolute inset-0 -z-10 bg-indigo-500/10 blur-3xl rounded-full" />

        {/* Main content */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-400 animate-pulse">FOCUS RADIO</h2>

          <div className="flex items-center justify-center gap-2 mb-6 text-indigo-400/80">
            <Users className="w-4 h-4" />
            <span className="text-sm">{listeners.toLocaleString()} focusing</span>
          </div>

          <div className="flex justify-center items-center h-20 mb-8 gap-1">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-2 bg-indigo-400 rounded-full transition-all duration-200"
                style={{
                  height: isPlaying ? `${20 + Math.sin((time + i * 10) * 0.1) * 20}px` : "4px",
                  opacity: isPlaying ? 0.7 : 0.3,
                }}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-8">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-500 hover:bg-indigo-400 transition-colors duration-300 text-slate-900 shadow-lg shadow-indigo-500/30"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
            </button>

            <div className="flex items-center gap-4">
              <Volume2 className="w-6 h-6 text-indigo-400" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="w-32 accent-indigo-400"
              />
            </div>
          </div>

          <div className="mt-6 text-center text-indigo-400 text-sm">{isPlaying ? `Now Playing: ${activeChannel}` : "Ready to Focus"}</div>
        </div>

        {/* Channel menu */}
        <div className="pt-8 border-t border-slate-800">
          <h3 className="text-sm text-slate-400 mb-4 text-center">Focus Channels</h3>
          <div className="grid grid-cols-2 gap-2">
            {channels.map((channel) => (
              <button
                key={channel.name}
                onClick={() => setActiveChannel(channel.name)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeChannel === channel.name ? "bg-indigo-500/20 text-indigo-400" : "hover:bg-slate-800/50 text-slate-400"
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

export default FocusPage;
