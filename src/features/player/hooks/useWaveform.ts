import { useState, useEffect } from "react";

export const useWaveform = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev + 1) % 100);
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return { time };
};
