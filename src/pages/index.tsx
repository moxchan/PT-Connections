import { PTType } from "@/@types";

import { Title } from "@/components/atoms/Title";
import { StopList } from "@/components/molecules";

const Home = () => {
  const stops = Array.from({ length: 5 }).map(() => ({
    type: PTType.Bus,
    title: "Elizabeth St / Lonsdale St",
    subtitle: "Toward Airport",
    times: ["1:00", "2:00"],
  }));
  return (
    <>
      <Title text="Your Connections" />
      <StopList stops={stops} />
    </>
  );
};

export default Home;
