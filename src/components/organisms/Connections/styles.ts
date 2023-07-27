import { pixelToVw } from "@/@utils";
import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  connectionList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: pixelToVw(8),
  },
}));
