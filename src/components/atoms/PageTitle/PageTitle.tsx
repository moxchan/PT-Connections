import { Container, Title } from "@mantine/core";
import { useStyles } from "./styles";

type PageTitleProps = {
  text: string;
};

const PageTitle = ({ text }: PageTitleProps) => {
  const { classes } = useStyles();
  return (
    <Container className={classes.titleContainer}>
      <Title className={classes.titleText}>{text}</Title>
    </Container>
  );
};

export default PageTitle;
