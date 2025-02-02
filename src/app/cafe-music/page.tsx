import AboutSection from "@/features/player/components/AboutSection";
import PlayerSection from "@/features/player/components/PlayerSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cafe Music | Minimal Tune",
};

const CafeMusic = () => {
  return (
    <>
      <PlayerSection channel="cafe-music" />
      <AboutSection channelName="Cafe Music" />
    </>
  );
};

export default CafeMusic;
