import { pixelToVw } from "@/@utils";
import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",

    border: "1px solid #646464",
    borderRadius: pixelToVw(16),
  },
  connectionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",

    padding: pixelToVw(16),
    margin: pixelToVw(8),

    cursor: "pointer",
    width: "90%",
  },

  connectionTitle: {
    fontSize: pixelToVw(28),
    fontWeight: 500,

    padding: pixelToVw(8),
    paddingLeft: pixelToVw(24),
    alignSelf: "center",
  },

  icon: {
    alignSelf: "center",
    cursor: "pointer",
    margin: pixelToVw(8),
  },

  delete: {},

  deleteContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "8%",
    ":hover": {
      // color: "red",
      background: "#aaaaaa",
    },
    margin: pixelToVw(28),

    cursor: "pointer",
    borderRadius: pixelToVw(8),
  },
}));
