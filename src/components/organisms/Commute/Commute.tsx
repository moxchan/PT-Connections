import { StopList } from "@/components/molecules";
import { useStyles } from "./styles";
import { PageTitle, StopProps } from "@/components/atoms";
import { Connection, PTType } from "@/@types";
import { DataSet } from "@/@constants";
import { capitalise } from "@/@utils/capitalise";

interface CommuteProps extends Connection {}

const Commute = ({ title, stops }: CommuteProps) => {
  const { classes } = useStyles();

  const stopData = DataSet.stops
    .filter((stop) => stops.includes(stop.id))
    .map((stop) => {
      const departures = DataSet.departures.filter((dep) => {
        return dep.stop_id === stop.id;
      });

      return {
        id: stop.id,
        type: capitalise(stop.mode) as PTType,
        title: stop.title,
        departures: departures.map((d) =>
          new Date(d.departure_time_utc).toLocaleTimeString("en-us", {
            hour: "2-digit",
            minute: "2-digit",
          })
        ),
        direction: "",
      } as unknown as StopProps;
    });

  return (
    <>
      <PageTitle text={title} />
      <StopList stops={stopData} />
    </>
  );
};

export default Commute;
