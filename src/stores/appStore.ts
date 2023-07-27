import { Connection } from "@/@types";
import { create } from "zustand";

interface AppState {
  connections: Connection[];
  selectedConnection: string;
  setConnections: (connections: Connection[]) => void;
  setSelectedConnection: (connection: string) => void;
}

const useAppStore = create<AppState>((set) => ({
  connections: [],
  selectedConnection: "",
  setConnections: (connections: Connection[]) =>
    set((state) => ({
      ...state,
      connections,
    })),
  setSelectedConnection: (selectedConnection: string) =>
    set((state) => ({
      ...state,
      selectedConnection,
    })),
}));

export default useAppStore;
