import { PTType } from "@/@types";
import { BusLogo, TrainLogo, TramLogo } from "@/assets/icons";

export const ptTypeToIcon = (ptType: PTType | string) => {
  switch (ptType) {
    case "Bus":
    case PTType.Bus:
      return BusLogo;
    case "Train":
    case PTType.Train:
      return TrainLogo;
    case "Tram":
    case PTType.Tram:
      return TramLogo;
    default:
      return;
  }
};
