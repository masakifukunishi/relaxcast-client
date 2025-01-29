import { useState, useRef } from "react";

interface UseAudioPlayerProps {
  streamUrl: string;
}

export const useAudioPlayer = ({ streamUrl }: UseAudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    const shouldStartPlaying = !isPlaying;

    if (shouldStartPlaying && audio.src === "") {
      setIsLoading(true);
      audio.src = streamUrl;

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

  return {
    isPlaying,
    isLoading,
    audioRef,
    togglePlay,
  };
};
