import { Container, Text } from "@mantine/core";
import { useStyles } from "./styles";
import Image from "next/image";
import { DepartureData, PTType, RouteData } from "@/@types";
import { pixelToVw, ptTypeToIcon } from "@/@utils";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { DataSet } from "@/@constants";
import { useState } from "react";

export type StopProps = {
  id: string;
  type: PTType;
  title: string;
  direction: string;
  departures: any[];
  directionIndex?: number;
};

const Stop = ({ id, type, title, direction, departures }: StopProps) => {
  const { classes } = useStyles();

  const [currDirection, setCurrDirection] = useState(direction);
  const [currDepartures, setCurrDepartures] = useState(departures);

  const resetStopData = (offset: number) => {
    const newDirection =
      directionIds[
        (directionIds.indexOf(currDirection) + offset) % directionIds.length
      ];
    setCurrDirection(newDirection);
    setCurrDepartures(deps.filter((dep) => dep.direction === newDirection));
  };

  const deps: DepartureData[] = DataSet.departures.filter(
    (dep) => dep.stop_id === id
  );
  const routeIds: string[] = deps.map((dep) => dep.route_id);
  const routes: RouteData = DataSet.routes.filter((route) =>
    routeIds.includes(route.id)
  )[0];

  const directionNames: Record<string, string | undefined> = routes.directions;
  const directionIds: string[] = Object.keys(directionNames);

  const handleOnClick = (direction: number) => {
    resetStopData(direction);
  };

  return (
    <Container className={classes.stopContainer}>
      <IconChevronLeft
        className={classes.arrow}
        size={pixelToVw(48)}
        onClick={() => handleOnClick(-1)}
      />
      <Container className={classes.iconContainer}>
        <Image className={classes.icon} src={ptTypeToIcon(type)} alt="" />
      </Container>
      <Container className={classes.stopInfoContainer}>
        <Text className={classes.stopTitle}>{title}</Text>
        <Text className={classes.stopSubtitle}>
          Toward {directionNames[currDirection]}
        </Text>
      </Container>
      <Container className={classes.timesContainer}>
        <Text className={classes.timeText}>
          {currDepartures
            .map((d) =>
              new Date(d.departure_time_utc).toLocaleTimeString("en-us", {
                hour: "2-digit",
                minute: "2-digit",
              })
            )
            .join(" ")}
        </Text>
      </Container>

      <IconChevronRight
        className={classes.arrow}
        size={pixelToVw(48)}
        onClick={() => handleOnClick(1)}
      />
    </Container>
  );
};

export default Stop;
