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

export interface StopData {
  id: string;
  mode: string;
  title: string;
}

export interface RouteData {
  id: string;
  mode: string;
  title: string;
  directions: Record<string, string>;
}

export interface DepartureData {
  stop_id: string;
  route_id: string;
  direction: string;
  departure_time_utc: string;
}
