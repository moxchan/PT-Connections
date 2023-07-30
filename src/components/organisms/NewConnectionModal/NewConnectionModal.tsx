import { Group, Modal, Select, TextInput } from "@mantine/core";
import { useStyles } from "./styles";
import { ConnectionConfig } from "../../../@config";
import { ptTypeToIcon } from "@/@utils";
import { PTType } from "@/@types";
import { capitalise } from "@/@utils/capitalise";
import { DataSet } from "@/@constants";
import { DropdownItem } from "@/components/atoms/DropdownItem";
import { useState } from "react";

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

  const [stops, setStops] = useState<string[]>(
    Array.from({ length: ConnectionConfig.maxStops })
  );

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
        />
        {Array.from({ length: ConnectionConfig.maxStops }).map((_, i) => (
          <Select
            key={i}
            className={classes.modalItem}
            itemComponent={DropdownItem}
            placeholder="Select Stop"
            searchable
            maxDropdownHeight={280}
            onChange={console.log}
            data={stopData}
            dropdownPosition="bottom"
            withinPortal={true}
          />
        ))}
      </Modal>
    </Group>
  );
};

export default NewConnectionModal;
