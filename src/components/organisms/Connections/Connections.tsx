import { useStyles } from "./styles";
import { LongButton, PageTitle } from "@/components/atoms";
import { ConnectionList } from "@/components/molecules/ConnectionList";
import { useAppStore } from "@/stores";
import { Container } from "@mantine/core";
import { NewConnectionModal } from "../NewConnectionModal";
import { useDisclosure } from "@mantine/hooks";

type ConnectionsProps = {};

const Connections = ({}: ConnectionsProps) => {
  const { classes } = useStyles();
  const { connections } = useAppStore();

  console.log(connections);

  const [opened, { open, close }] = useDisclosure(false);

  const handleAddNewOnClick = () => {
    open();
  };

  return (
    <>
      <PageTitle text="My Connections" />
      <Container className={classes.connectionList}>
        <ConnectionList connections={connections} />
        <LongButton text="Add New" onClick={handleAddNewOnClick} />
      </Container>
      <NewConnectionModal
        opened={opened}
        onClose={close}
        title={<PageTitle text="New Connection" />}
      />
    </>
  );
};
export default Connections;
