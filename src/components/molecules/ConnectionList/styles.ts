import { pixelToVw } from "@/@utils";
import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  connectionListContainer: {
    padding: pixelToVw(8),
    width: "100%",
  },
}));
