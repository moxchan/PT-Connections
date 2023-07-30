import { pixelToVw } from "@/@utils";
import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  stopContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    border: "1px solid #646464",
    borderRadius: pixelToVw(16),

    padding: pixelToVw(16),
    margin: pixelToVw(8),
  },
  iconContainer: {
    width: pixelToVw(128),
    height: pixelToVw(64),
  },
  icon: {
    width: "100%",
    height: "100%",
  },

  stopInfoContainer: {
    display: "flex",
    flexDirection: "column",
  },

  stopTitle: {
    fontSize: pixelToVw(24),
    fontWeight: 500,
  },

  stopSubtitle: {
    fontSize: pixelToVw(18),
    fontWeight: 300,
  },

  timesContainer: {
    display: "flex",
    alignItems: "center",
  },

  timeText: {
    fontSize: pixelToVw(24),
  },

  arrow: {
    alignSelf: "center",
    cursor: "pointer",
    margin: pixelToVw(8),
  },
}));
