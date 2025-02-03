import AboutSection from "@/features/player/components/AboutSection";
import PlayerSection from "@/features/player/components/PlayerSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brown Noise | RelaxTunes",
};

const BrownNoise = () => {
  return (
    <>
      <PlayerSection channel="brown-noise" />
      <AboutSection channelName="Brown Noise" />
    </>
  );
};

export default BrownNoise;
