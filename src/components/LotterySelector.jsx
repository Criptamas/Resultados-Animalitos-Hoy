import React from "react";
import { COLORS } from "../theme.js";

export default function LotterySelector({ loterias, activeId, onSelect }) {
  return (
    <nav className="px-5 max-w-6xl mx-auto mb-8">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {loterias.map((l) => {
          const active = l.id === activeId;
          return (
            <button
              key={l.id}
              onClick={() => onSelect(l.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border whitespace-nowrap transition-all duration-200 flex-shrink-0 focus-visible:ring-2 focus-visible:ring-amber-400"
              style={{
                backgroundColor: active ? l.color : "transparent",
                borderColor: active ? l.color : "rgba(247,243,232,0.25)",
                color: active ? COLORS.navy : COLORS.cream,
              }}
            >
              <span className="text-lg">{l.emoji}</span>
              <span className="text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>{l.nombre}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
