"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";

export default function Focus() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-8">
      <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8">
        <IoArrowBack size={24} />
        <span>Back to Home</span>
      </Link>

      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold mb-12">Focus</h1>

        <div className="flex flex-col items-center gap-8">
          <audio ref={audioRef} src="http://localhost:8000/live" preload="none" />

          <button onClick={togglePlay} className="p-4 hover:scale-110 transition-transform" aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? <IoPauseCircleOutline size={64} /> : <IoPlayCircleOutline size={64} />}
          </button>

          <div className="text-xl font-medium text-white/80">{isPlaying ? "Now Playing" : "Paused"}</div>
        </div>
      </div>
    </div>
  );
}
