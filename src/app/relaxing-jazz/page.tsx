import AboutSection from "@/app/features/player/components/AboutSection";
import PlayerSection from "@/app/features/player/components/PlayerSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relaxing Jazz | Minimal Tune",
};

const RelaxingJazz = () => {
  return (
    <>
      <PlayerSection channel="relaxing-jazz" />
      <AboutSection channelName="Relaxing Jazz" />
    </>
  );
};

export default RelaxingJazz;
