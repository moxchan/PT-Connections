import { Group, Text } from "@mantine/core";
import Image from "next/image";
import { useStyles } from "./styles";
import { forwardRef } from "react";

interface DropdownItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
  label: string;
  description: string;
}

// eslint-disable-next-line react/display-name
const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  ({ image, label, description, ...others }: DropdownItemProps, ref) => {
    const { classes } = useStyles();
    return (
      <div ref={ref} {...others}>
        <Group noWrap className={classes.dropdownItem}>
          <Image
            className={classes.icon}
            src={image}
            alt={`Icon for ${image}`}
          />

          <div>
            <Text size="sm">{label}</Text>
            <Text size="xs" opacity={0.65}>
              {description}
            </Text>
          </div>
        </Group>
      </div>
    );
  }
);
export default DropdownItem;
