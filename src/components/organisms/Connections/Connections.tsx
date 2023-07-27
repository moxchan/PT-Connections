import { useStyles } from "./styles";
import { StopList } from "@/components/molecules";
import { connections, stops } from "@/@constants";
import { LongButton, PageTitle } from "@/components/atoms";
import { ConnectionList } from "@/components/molecules/ConnectionList";
import { Button, Container } from "@mantine/core";

type ConnectionsProps = {};

const Connections = ({}: ConnectionsProps) => {
  const { classes } = useStyles();

  return (
    <>
      <PageTitle text="My Connections" />
      <Container className={classes.connectionList}>
        <ConnectionList connections={connections} />
        <LongButton text="Add New" />
      </Container>
    </>
  );
};
export default Connections;
