import { pixelToVw } from "@/@utils";
import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  connectionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",

    border: "1px solid #646464",
    borderRadius: pixelToVw(16),

    padding: pixelToVw(16),
    margin: pixelToVw(8),

    cursor: "pointer",
  },

  connectionTitle: {
    fontSize: pixelToVw(28),
    fontWeight: 500,

    padding: pixelToVw(8),
    paddingLeft: pixelToVw(24),
    alignSelf: "center",
  },

  arrow: {
    alignSelf: "center",
    cursor: "pointer",
    margin: pixelToVw(8),
  },
}));
