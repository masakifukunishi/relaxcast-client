import React from "react";
import { Play, Pause } from "lucide-react";

interface PlayButtonProps {
  isPlaying: boolean;
  isLoading: boolean;
  onClick: () => void;
}

const PlayButton = ({ isPlaying, isLoading, onClick }: PlayButtonProps) => {
  return (
    <button
      onClick={onClick}
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
  );
};

export default PlayButton;
