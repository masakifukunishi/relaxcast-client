import { useEffect } from "react";

interface UseMediaSessionProps {
  togglePlay: () => void;
}

export const useMediaSession = ({ togglePlay }: UseMediaSessionProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space" || event.code === "MediaPlayPause") {
        event.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    if ("mediaSession" in navigator) {
      navigator.mediaSession.setActionHandler("play", togglePlay);
      navigator.mediaSession.setActionHandler("pause", togglePlay);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if ("mediaSession" in navigator) {
        navigator.mediaSession.setActionHandler("play", null);
        navigator.mediaSession.setActionHandler("pause", null);
      }
    };
  }, [togglePlay]);
};
