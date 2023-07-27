import { PTType } from "@/@types";

export const stops = Array.from({ length: 5 }).map((_, i) => ({
  id: i,
  type: Object.values(PTType)[(i % 3) + 3] as PTType,
  title: "Elizabeth St / Lonsdale St",
  direction: "Toward Airport",
  departures: ["1:00", "2:00"],
}));
