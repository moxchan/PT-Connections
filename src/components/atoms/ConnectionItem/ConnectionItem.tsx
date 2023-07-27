import { Container, Text } from "@mantine/core";
import { useStyles } from "./styles";
import { IconChevronRight } from "@tabler/icons-react";
import { pixelToVw } from "@/@utils";
import { useRouter } from "next/router";
import { useAppStore } from "@/stores";

export type CIProps = {
  title: string;
};

const ConnectionItem = ({ title }: CIProps) => {
  const { classes } = useStyles();
  const router = useRouter();
  const { setSelectedConnection } = useAppStore();

  const handleOnClick = async () => {
    setSelectedConnection(title);
    await router.push("/connection");
  };

  return (
    <Container className={classes.connectionContainer} onClick={handleOnClick}>
      <IconChevronRight className={classes.arrow} size={pixelToVw(48)} />
      <Text className={classes.connectionTitle}>{title}</Text>
    </Container>
  );
};

export default ConnectionItem;
