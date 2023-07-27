import { PTType } from "@/@types";
import { BusLogo, TrainLogo, TramLogo } from "@/assets/icons";

export const ptTypeToIcon = (ptType: PTType) => {
  switch (ptType) {
    case PTType.Bus:
      return BusLogo;
    case PTType.Train:
      return TrainLogo;
    case PTType.Tram:
      return TramLogo;
    default:
      return;
  }
};
