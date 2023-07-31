import { StopList } from "@/components/molecules";
import { useStyles } from "./styles";
import { PageTitle, StopProps } from "@/components/atoms";
import { Connection, PTType } from "@/@types";
import { DataSet } from "@/@constants";
import { capitalise } from "@/@utils/capitalise";

interface CommuteProps extends Connection {}

const Commute = ({ title, stops }: CommuteProps) => {
  const { classes } = useStyles();

  // Shape the raw data into a form that is useful for StopList
  const stopData = DataSet.stops
    .filter((stop) => stops.includes(stop.id))
    .map((stop) => {
      const departures = DataSet.departures.filter((dep) => {
        return dep.stop_id === stop.id;
      });

      const sampleDirection = departures[0].direction;

      const finalDepartures = departures.filter(
        (dep) => dep.direction === sampleDirection
      );

      return {
        id: stop.id,
        type: capitalise(stop.mode) as PTType,
        title: stop.title,
        departures: finalDepartures,
        direction: sampleDirection,
      } as StopProps;
    });

  return (
    <>
      <PageTitle text={title} />
      <StopList stops={stopData} />
    </>
  );
};

export default Commute;
