import { Container, Text } from "@mantine/core";
import { useStyles } from "./styles";
import { IconChevronRight, IconTrash } from "@tabler/icons-react";
import { pixelToVw } from "@/@utils";
import { useRouter } from "next/router";
import { useAppStore } from "@/stores";

export type CIProps = {
  title: string;
};

const ConnectionItem = ({ title }: CIProps) => {
  const { classes } = useStyles();
  const router = useRouter();
  const { connections, setConnections, setSelectedConnection } = useAppStore();

  const handleConnectionOnClick = async () => {
    setSelectedConnection(title);
    await router.push("/connection");
  };

  const handleDeleteConnectionOnClick = () => {
    setConnections(
      connections.filter((connection) => connection.title != title)
    );
  };

  return (
    <Container className={classes.container}>
      <Container
        className={classes.connectionContainer}
        onClick={handleConnectionOnClick}
      >
        <IconChevronRight className={classes.icon} size={pixelToVw(48)} />
        <Text className={classes.connectionTitle}>{title}</Text>
      </Container>
      <Container className={classes.deleteContainer}>
        <IconTrash
          className={`${classes.delete} ${classes.icon}`}
          onClick={handleDeleteConnectionOnClick}
        />
      </Container>
    </Container>
  );
};

export default ConnectionItem;
