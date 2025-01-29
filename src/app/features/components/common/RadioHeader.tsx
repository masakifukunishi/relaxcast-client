interface RadioHeaderProps {
  isLoading: boolean;
  subtitle: string;
}

const RadioHeader = ({ isLoading, subtitle }: RadioHeaderProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-4 text-amber-200 [text-shadow:_0_4px_8px_rgba(0,0,0,0.8)]">Minimal Tune</h1>
      <h2 className="text-xl font-semibold text-center text-amber-200 mt-2 mb-4 [text-shadow:_0_3px_6px_rgba(0,0,0,0.8)]">
        <span className="flex items-center justify-center gap-2">
          {isLoading ? (
            <span className="text-amber-200/80 text-base [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
              Tuning
              <span>...</span>
              <span className="text-xs ml-2">{(Math.random() * 100).toFixed(1)} MHz</span>
            </span>
          ) : (
            subtitle
          )}
        </span>
      </h2>
    </>
  );
};

export default RadioHeader;
