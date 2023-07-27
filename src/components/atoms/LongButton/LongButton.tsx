import { Button, Text } from "@mantine/core";
import { useStyles } from "./styles";

type LBProps = {
  text: string;
};

const LongButton = ({ text }: LBProps) => {
  const { classes } = useStyles();
  return (
    <Button className={classes.container} color="gray">
      <Text className={classes.title}>{text}</Text>
    </Button>
  );
};

export default LongButton;
