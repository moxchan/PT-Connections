import { Container } from "@mantine/core";
import { useStyles } from "./styles";
import { Stop, StopProps } from "@/components/atoms";

type StopListProps = {
  stops: StopProps[];
};

const StopList = ({ stops }: StopListProps) => {
  const { classes } = useStyles();
  return (
    <Container className={classes.stopListContainer}>
      {stops.map((stopProp, index) => (
        <Stop key={index} {...stopProp} />
      ))}
    </Container>
  );
};

export default StopList;
