import { useState, useRef, useEffect, useCallback } from "react";

interface UseAudioPlayerProps {
  streamUrl: string;
}

export const useAudioPlayer = ({ streamUrl }: UseAudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => setIsLoading(false);
    const handleError = () => setIsLoading(false);

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("error", handleError);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(streamUrl);
    }

    const audio = audioRef.current;
    const shouldStartPlaying = !isPlaying;

    if (shouldStartPlaying) {
      setIsLoading(true);
      audio.src = streamUrl;
      audio.play().catch(() => setIsLoading(false));
    } else {
      audio.pause();
    }

    setIsPlaying(shouldStartPlaying);
  }, [isPlaying, streamUrl]);

  return {
    isPlaying,
    isLoading,
    audioRef,
    togglePlay,
  };
};
