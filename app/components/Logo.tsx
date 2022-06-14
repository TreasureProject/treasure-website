import { Player, Controls } from "@lottiefiles/react-lottie-player";
import DataJson from "../lotties/data.json";

export const Logo = () => {
  return (
    <Player
      keepLastFrame
      src={DataJson}
      autoplay
      className="h-16 w-auto xl:h-20"
    />
  );
};
