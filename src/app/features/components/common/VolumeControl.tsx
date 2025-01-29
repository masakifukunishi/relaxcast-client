import React from "react";

interface VolumeControlProps {
  volume: number;
  onChange: (value: number) => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({ volume, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-24 accent-amber-600"
      />
    </div>
  );
};

export default VolumeControl;
