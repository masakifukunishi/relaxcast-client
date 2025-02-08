import { create } from "zustand";

interface IcecastSource {
  listenurl: string;
  listeners: number;
}

interface IcecastStats {
  icestats: {
    source: IcecastSource[];
  };
}

interface ListenerState {
  listenerCount: number | null;
  fetchListeners: () => Promise<void>;
}

export const useListenerStore = create<ListenerState>((set) => ({
  listenerCount: null,
  fetchListeners: async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STREAM_URL}/status-json.xsl`);
      const data: IcecastStats = await res.json();
      const sources: IcecastSource[] = data.icestats.source || [];
      const totalListeners = sources.reduce((sum, stream) => sum + (stream.listeners || 0), 0);
      set({ listenerCount: totalListeners });
    } catch (error) {
      console.error("Failed to fetch listener count:", error);
      set({ listenerCount: null });
    }
  },
}));
