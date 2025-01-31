import { useState, useEffect } from "react";

interface RadioHeaderProps {
  isLoading: boolean;
  subtitle: string;
}

const RadioHeader = ({ isLoading, subtitle }: RadioHeaderProps) => {
  const [frequency, setFrequency] = useState((Math.random() * 100).toFixed(1));

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setFrequency((Math.random() * 100).toFixed(1));
      }, 80);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <>
      <div className="text-3xl font-bold text-center mb-4 text-amber-200 [text-shadow:_0_4px_8px_rgba(0,0,0,0.8)]">Minimal Tune</div>
      <div className="text-xl font-semibold text-center text-amber-200 mt-2 mb-4 [text-shadow:_0_3px_6px_rgba(0,0,0,0.8)]">
        <span className="flex items-center justify-center gap-2">
          {isLoading ? (
            <span className="text-amber-200/80 text-base [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
              Tuning
              <span>...</span>
              <span className="text-xs ml-2">{frequency} MHz</span>
            </span>
          ) : (
            subtitle
          )}
        </span>
      </div>
    </>
  );
};

export default RadioHeader;
