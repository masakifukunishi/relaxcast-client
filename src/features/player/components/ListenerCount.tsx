"use client";

import { useState, useEffect } from "react";
import { Users } from "lucide-react";

interface IcecastSource {
  listenurl: string;
  listeners: number;
}

interface IcecastStats {
  icestats: {
    source: IcecastSource[];
  };
}

const ListenerCount = () => {
  const [listenerCount, setListenerCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchListeners = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STREAM_URL}/status-json.xsl`);
        const data: IcecastStats = await res.json();
        const sources: IcecastSource[] = data.icestats.source || [];
        const totalListeners = sources.reduce((sum, stream) => sum + (stream.listeners || 0), 0);
        setListenerCount(totalListeners);
      } catch (error) {
        console.error("Failed to fetch listener count:", error);
        setListenerCount(null);
      }
    };

    fetchListeners();
    const interval = setInterval(fetchListeners, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 mb-6 font-semibold">
      <Users className="w-4 h-4 text-amber-200/90" />
      <span className="text-amber-200 [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
        <span className="text-lg mr-1">{listenerCount !== null ? listenerCount : "--"}</span>
        {listenerCount === 1 ? "person is listening" : "listeners currently online"}
      </span>
    </div>
  );
};

export default ListenerCount;
