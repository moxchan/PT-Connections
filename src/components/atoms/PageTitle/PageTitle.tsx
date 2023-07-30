import { Container, Title } from "@mantine/core";
import { useStyles } from "./styles";
import { useRouter } from "next/router";

type PageTitleProps = {
  text: string;
};

const PageTitle = ({ text }: PageTitleProps) => {
  const { classes } = useStyles();

  const router = useRouter();

  const handleOnClick = async () => {
    await router.push("/");
  };

  return (
    <Container className={classes.titleContainer} onClick={handleOnClick}>
      <Title className={classes.titleText}>{text}</Title>
    </Container>
  );
};

export default PageTitle;
