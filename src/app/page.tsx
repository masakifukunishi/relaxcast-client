"use client";

import Channels from "@/app/features/player/Channels";
import { useRandomBackground } from "@/app/hooks/useRandomBackground";

const Home = () => {
  const { backgroundImage, isImageLoaded } = useRandomBackground("/images/relaxing-bg");

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center text-center px-6">
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-500 ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/50" />
      <div className="w-full max-w-3xl px-8 py-16 relative z-10">
        <h1 className="text-4xl font-bold text-amber-200 mb-4 [text-shadow:_0_4px_8px_rgba(0,0,0,0.8)]">Minimal Tune</h1>
        <p className="text-lg text-stone-300 mb-6 [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)] mb-10">
          Relaxing music, anytime and anywhere. <br />
          Immerse yourself in a soothing experience.
        </p>
        <Channels />
      </div>
    </div>
  );
};

export default Home;
