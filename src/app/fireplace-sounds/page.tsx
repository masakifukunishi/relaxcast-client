import AboutSection from "@/features/player/components/AboutSection";
import PlayerSection from "@/features/player/components/PlayerSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fireplace Sounds | RelaxCast",
};

const FireplaceSounds = () => {
  return (
    <>
      <PlayerSection channel="fireplace-sounds" />
      <AboutSection channelName="Fireplace Sounds" />
    </>
  );
};

export default FireplaceSounds;
