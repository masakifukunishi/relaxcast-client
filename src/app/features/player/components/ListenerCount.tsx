"use client";

import { Users } from "lucide-react";

const ListenerCount = () => {
  return (
    <div className="flex items-center justify-center gap-2 mb-6 font-semibold">
      <Users className="w-4 h-4 text-amber-200/90" />
      <span className="text-amber-200 [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
        <span className="text-lg mr-1">99</span>
        people listening now
        <span className="font-bold text-lg animate-ping ml-1">
          <span>...</span>
        </span>
      </span>
    </div>
  );
};

export default ListenerCount;
