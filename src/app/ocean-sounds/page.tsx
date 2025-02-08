import AboutSection from "@/features/player/components/AboutSection";
import PlayerSection from "@/features/player/components/PlayerSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ocean Sounds | RelaxTunes",
};

const OceanSounds = () => {
  return (
    <>
      <PlayerSection channel="ocean-sounds" />
      <AboutSection channelName="Ocean Sounds" />
    </>
  );
};

export default OceanSounds;
