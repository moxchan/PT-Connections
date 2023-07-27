import { Container, Text } from "@mantine/core";
import { useStyles } from "./styles";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  const { classes } = useStyles();
  return (
    <Container className={classes.titleContainer}>
      <Text className={classes.titleText}>{text}</Text>
    </Container>
  );
};

export default Title;
