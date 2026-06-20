import React from "react";
import { COLORS } from "../theme.js";
import ResultCard from "./ResultCard.jsx";

export default function ResultsModule({ loteria }) {
  return (
    <section className="px-5 max-w-6xl mx-auto pb-24">
      {/* Encabezado de la lotería */}
      <div
        className="flex items-center justify-between mb-4 pb-3 border-b"
        style={{ borderColor: "rgba(247,243,232,0.12)" }}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{loteria.emoji}</span>
          <h2
            className="text-xl sm:text-2xl tracking-wide"
            style={{ fontFamily: "'Anton', sans-serif", color: COLORS.cream }}
          >
            {loteria.nombre.toUpperCase()}
          </h2>
        </div>
        <span
          className="text-xs px-2 py-1 rounded"
          style={{
            backgroundColor: "rgba(247,243,232,0.06)",
            color: "rgba(247,243,232,0.45)",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          {loteria.resultados.length} sorteos
        </span>
      </div>

      {/* Grid de resultados */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {loteria.resultados.map((r, idx) => (
          <ResultCard key={idx} resultado={r} color={loteria.color} />
        ))}
      </div>
    </section>
  );
}
