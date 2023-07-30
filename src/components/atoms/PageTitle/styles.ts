import { pixelToVw } from "@/@utils";
import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  titleContainer: {
    width: "100%",
    padding: pixelToVw(8),
    cursor: "pointer",
  },
  titleText: {
    fontSize: pixelToVw(32),
    fontWeight: 500,
  },
}));
