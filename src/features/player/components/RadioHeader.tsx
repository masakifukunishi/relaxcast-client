"use client";

interface RadioHeaderProps {
  subtitle: string;
}

const RadioHeader = ({ subtitle }: RadioHeaderProps) => {
  return (
    <>
      <div className="text-xl font-semibold text-center text-amber-200 mt-2 mb-4 [text-shadow:_0_3px_6px_rgba(0,0,0,0.8)]">RelaxTunes</div>
      <h1 className="text-3xl font-bold text-center mb-2 text-amber-200 [text-shadow:_0_4px_8px_rgba(0,0,0,0.8)]">{subtitle}</h1>
    </>
  );
};

export default RadioHeader;
