import { useState, useEffect } from "react";

interface UseVolumeProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  initialVolume?: number;
}

export const useVolume = ({ audioRef, initialVolume = 50 }: UseVolumeProps) => {
  const [volume, setVolume] = useState(initialVolume);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  return { volume, setVolume };
};
