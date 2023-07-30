import { useStyles } from "./styles";
import { LongButton, PageTitle } from "@/components/atoms";
import { ConnectionList } from "@/components/molecules/ConnectionList";
import { useAppStore } from "@/stores";
import { Container } from "@mantine/core";

type ConnectionsProps = {};

const Connections = ({}: ConnectionsProps) => {
  const { classes } = useStyles();
  const { connections } = useAppStore();

  const handleAddNewOnClick = () => {
    // Add Open Modal
  };

  return (
    <>
      <PageTitle text="My Connections" />
      <Container className={classes.connectionList}>
        <ConnectionList connections={connections} />
        <LongButton text="Add New" onClick={handleAddNewOnClick} />
      </Container>
    </>
  );
};
export default Connections;
