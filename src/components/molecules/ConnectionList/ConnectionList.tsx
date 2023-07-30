import { Container } from "@mantine/core";
import { useStyles } from "./styles";
import { CIProps, ConnectionItem } from "@/components/atoms";

type ConnectionListProps = {
  connections: CIProps[];
};

const ConnectionList = ({ connections }: ConnectionListProps) => {
  const { classes } = useStyles();
  return (
    <Container className={classes.connectionListContainer}>
      {connections.map((ciProp, index) => (
        <ConnectionItem key={index} {...ciProp} />
      ))}
    </Container>
  );
};

export default ConnectionList;
