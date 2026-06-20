import React, { useState } from "react";
import { Clock } from "lucide-react";
import { COLORS } from "../theme.js";

export default function ResultCard({ resultado, color }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="rounded-xl p-3 flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1"
      style={{ backgroundColor: COLORS.navyLight, border: "1px solid rgba(247,243,232,0.08)" }}
    >
      {/* Hora */}
      <div
        className="flex items-center gap-1 mb-2 px-2 py-0.5 rounded-full"
        style={{ backgroundColor: "rgba(247,243,232,0.06)" }}
      >
        <Clock size={11} color={color} />
        <span
          className="text-xs"
          style={{ color: "rgba(247,243,232,0.7)", fontFamily: "'Space Mono', monospace" }}
        >
          {resultado.hora}
        </span>
      </div>

      {/* Imagen del animal */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-2 overflow-hidden"
        style={{ backgroundColor: color + "22", border: `2px solid ${color}` }}
      >
        {resultado.imagen && !imgError ? (
          <img
            src={resultado.imagen}
            alt={resultado.nombre}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          // Fallback: inicial del animal si la imagen falla
          <span
            className="text-xl font-bold"
            style={{ color, fontFamily: "'Anton', sans-serif" }}
          >
            {resultado.nombre?.[0] ?? "?"}
          </span>
        )}
      </div>

      {/* Nombre del animal */}
      <span
        className="text-xs font-semibold leading-tight"
        style={{ color: COLORS.cream, fontFamily: "'DM Sans', sans-serif" }}
      >
        {resultado.nombre}
      </span>
    </div>
  );
}
