import { Commute } from "@/components/organisms";
import { useAppStore } from "@/stores";
import { useRouter } from "next/router";

type ConnectionProps = {};

const Connection = ({}: ConnectionProps) => {
  const router = useRouter();
  const { selectedConnection, connections } = useAppStore();
  const conectionData = connections.filter(
    (connection) => connection.title === selectedConnection
  );

  const commuteProps = conectionData[0];

  return commuteProps && <Commute {...commuteProps} />;
};

export default Connection;
