import { pixelToVw } from "@/@utils";
import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    border: "1px solid #646464",
    borderRadius: pixelToVw(16),

    height: pixelToVw(64),

    padding: pixelToVw(16),
    margin: pixelToVw(16),

    backgroundColor: "#f1f1f1",

    cursor: "pointer",
  },

  title: {
    color: "#232323",
    fontSize: pixelToVw(28),
    fontWeight: 500,

    padding: pixelToVw(8),
    paddingLeft: pixelToVw(24),
    alignSelf: "center",
  },
}));
