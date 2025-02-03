import { useState, useEffect } from "react";

interface UseVolumeProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  initialVolume?: number;
}

export const useVolume = ({ audioRef, initialVolume = 50 }: UseVolumeProps) => {
  const storedVolume = typeof window !== "undefined" ? localStorage.getItem("playerVolume") : null;
  const initial = storedVolume ? Number(storedVolume) : initialVolume;

  const [volume, setVolume] = useState(initial);
  const [isVolumeLoaded, setIsVolumeLoaded] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
    localStorage.setItem("playerVolume", String(volume));

    setIsVolumeLoaded(true);
  }, [volume, audioRef]);

  return { volume, setVolume, isVolumeLoaded };
};
