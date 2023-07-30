import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",

    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    display: "flex",
  },
}));
