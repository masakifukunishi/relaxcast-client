import React from "react";

interface WaveformVisualizerProps {
  isPlaying: boolean;
  time: number;
  barCount?: number;
}

const WaveformVisualizer: React.FC<WaveformVisualizerProps> = ({ isPlaying, time, barCount = 20 }) => {
  return (
    <div className="flex justify-center items-center h-20 mb-8 gap-1">
      {[...Array(barCount)].map((_, i) => (
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
  );
};

export default WaveformVisualizer;
