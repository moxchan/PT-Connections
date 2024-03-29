import { pixelToVw } from "@/@utils";
import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  modal: {
    display: "flex",
    overflow: "visible",
  },
  modalItem: {
    padding: pixelToVw(10),
  },
  saveButton: {
    margin: pixelToVw(10),
    background: "#646464",
    ":hover": {
      background: "#323232",
    },
  },
}));
