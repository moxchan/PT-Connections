export enum PTType {
  Bus = "bus",
  Tram = "tram",
  Train = "train",
}

export interface Connection {
  title: string;
  stops: string[]; // a list of stop IDs
}

export interface Stop {
  id: string;
  title: string;
  direction: string;
  departures: string; // times
}
