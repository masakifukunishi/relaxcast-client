import AboutSection from "@/features/player/components/AboutSection";
import PlayerSection from "@/features/player/components/PlayerSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rain Sound | Minimal Tune",
};

const RainSound = () => {
  return (
    <>
      <PlayerSection channel="rain-sounds" />
      <AboutSection channelName="Rain Sounds" />
    </>
  );
};

export default RainSound;
