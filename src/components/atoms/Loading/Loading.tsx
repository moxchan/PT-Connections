import React from "react";
import { Loader } from "@mantine/core";
import { useStyles } from "./styles";

const Loading = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Loader variant="dots" className={classes.loader} size="lg" />
    </div>
  );
};

export default Loading;
