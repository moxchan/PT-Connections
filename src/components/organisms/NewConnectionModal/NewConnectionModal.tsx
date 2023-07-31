import { Button, Group, Modal, Select, TextInput } from "@mantine/core";
import { useStyles } from "./styles";
import { ConnectionConfig } from "../../../@config";
import { ptTypeToIcon } from "@/@utils";
import { Connection, PTType } from "@/@types";
import { capitalise } from "@/@utils/capitalise";
import { DataSet } from "@/@constants";
import { DropdownItem } from "@/components/atoms/DropdownItem";
import { useState } from "react";
import { useAppStore } from "@/stores";
import { notifications } from "@mantine/notifications";

type NCMProps = {
  opened: boolean;
  onClose: () => void;
  title: React.ReactNode;
};

type DropdownProp = {
  image: string;
  label: string;
  value: string;
  description: string;
};

const NewConnectionModal = ({ opened, onClose, title }: NCMProps) => {
  const { classes } = useStyles();

  const { connections, setConnections } = useAppStore();

  const [stops, setStops] = useState<string[]>(
    Array(ConnectionConfig.maxStops).fill("")
  );
  const [newName, setNewName] = useState("");

  const handleSaveOnClick = () => {
    const numValidStops = stops.reduce(
      (validStops, currStop) => validStops + Number(!!currStop),
      0
    );

    if (newName === "") {
      notifications.show({
        title: "Invalid Input",
        message: "Your Connection name must not be blank",
        color: "red",
      });
      return;
    }

    if (
      connections.filter((connection) => connection.title === newName).length
    ) {
      notifications.show({
        title: "Invalid Input",
        message: "Your Connection name must be unique",
        color: "red",
      });
      return;
    }

    if (numValidStops < 1) {
      notifications.show({
        title: "Invalid Input",
        message: "You must have at least one (1) new stop.",
        color: "red",
      });
      return;
    }

    const currConnections = connections;
    const newConnection: Connection = {
      title: newName,
      stops: stops,
    };
    currConnections.push(newConnection);
    setConnections(currConnections);
    onClose();
  };

  const stopData: DropdownProp[] = DataSet.stops.map((stop) => ({
    image: ptTypeToIcon(PTType[capitalise(stop.mode) as PTType]),
    label: stop.title,
    value: stop.id,
    description: capitalise(stop.mode) as PTType,
  }));

  return (
    <Group position="center">
      <Modal
        className={classes.modal}
        opened={opened}
        onClose={onClose}
        title={title}
      >
        <TextInput
          className={classes.modalItem}
          placeholder="e.g. To Work"
          label="Name"
          onChange={(e) => setNewName(e.currentTarget.value)}
        />
        {Array.from({ length: ConnectionConfig.maxStops }).map((_, i) => (
          <Select
            key={i}
            className={classes.modalItem}
            itemComponent={DropdownItem}
            placeholder="Select Stop"
            searchable
            clearable
            maxDropdownHeight={280}
            onChange={(value) => {
              const currStops = stops;
              currStops[i] = value ?? "";
              setStops(currStops);
            }}
            data={stopData}
            dropdownPosition="bottom"
            withinPortal={true}
          />
        ))}
        <Button className={classes.saveButton} onClick={handleSaveOnClick}>
          Save Connection
        </Button>
      </Modal>
    </Group>
  );
};

export default NewConnectionModal;
