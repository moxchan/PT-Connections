import { Button, Text } from "@mantine/core";
import { useStyles } from "./styles";
import { MouseEventHandler } from "react";

type LBProps = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const LongButton = ({ text, onClick }: LBProps) => {
  const { classes } = useStyles();
  return (
    <Button className={classes.container} color="gray" onClick={onClick}>
      <Text className={classes.title}>{text}</Text>
    </Button>
  );
};

export default LongButton;
