"use client";

import { useEffect } from "react";
import { Users } from "lucide-react";
import { useListenerStore } from "@/store/listenerStore";

const ListenerCount = () => {
  const { listenerCount, fetchListeners } = useListenerStore();

  useEffect(() => {
    fetchListeners();
    const interval = setInterval(fetchListeners, 5000);

    return () => clearInterval(interval);
  }, [fetchListeners]);

  return (
    <div className="flex items-center justify-center gap-2 mb-6 font-semibold">
      <Users className="w-4 h-4 text-amber-200/90" />
      <span className="text-amber-200 [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
        {listenerCount === 0 ? (
          <span className="">Waiting for listeners</span>
        ) : (
          <>
            <span className="text-lg mr-1">{listenerCount !== null ? listenerCount : "--"}</span>
            {listenerCount === 1 ? "person is listening" : "people are listening"}
          </>
        )}
        <span className="font-bold text-lg animate-pulse ml-1">...</span>
      </span>
    </div>
  );
};

export default ListenerCount;
