import { PTType } from "@/@types";

import { Title } from "@/components/atoms/Title";
import { StopList } from "@/components/molecules";

const Home = () => {
  const stops = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    type: Object.values(PTType)[(i % 3) + 3] as PTType,
    title: "Elizabeth St / Lonsdale St",
    direction: "Toward Airport",
    departures: ["1:00", "2:00"],
  }));
  return (
    <>
      <Title text="Your Connections" />
      <StopList stops={stops} />
    </>
  );
};

export default Home;
