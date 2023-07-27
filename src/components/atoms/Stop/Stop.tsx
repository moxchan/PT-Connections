import { Container, Text } from "@mantine/core";
import { useStyles } from "./styles";
import Image from "next/image";
import { PTType } from "@/@types";
import { pixelToVw, ptTypeToIcon } from "@/@utils";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export type StopProps = {
  type: PTType;
  title: string;
  subtitle: string;
  times: string[];
};

const Stop = ({ type, title, subtitle, times }: StopProps) => {
  const { classes } = useStyles();
  return (
    <Container className={classes.stopContainer}>
      <IconChevronLeft className={classes.arrow} size={pixelToVw(48)} />
      <Container className={classes.iconContainer}>
        <Image className={classes.icon} src={ptTypeToIcon(type)} alt="" />
      </Container>
      <Container className={classes.stopInfoContainer}>
        <Text className={classes.stopTitle}>{title}</Text>
        <Text className={classes.stopSubtitle}>{subtitle}</Text>
      </Container>
      <Container className={classes.timesContainer}>
        <Text className={classes.timeText}>{times.join(" ")}</Text>
      </Container>

      <IconChevronRight className={classes.arrow} size={pixelToVw(48)} />
    </Container>
  );
};

export default Stop;
