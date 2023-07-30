import { pixelToVw } from "@/@utils";
import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  icon: {
    width: pixelToVw(36),
    height: pixelToVw(36),
    marginLeft: pixelToVw(16),
  },
  dropdownItem: {
    borderRadius: pixelToVw(12),
    padding: pixelToVw(12),
    ":hover": {
      backgroundColor: "#aaaaaa",
    },
    cursor: "pointer",
  },
}));
