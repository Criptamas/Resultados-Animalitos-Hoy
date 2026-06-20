import React from "react";
import { COLORS } from "../theme.js";

/**
 * Pantalla de carga animada.
 * Se muestra SOLO en la primera visita (sin caché guardado).
 * Una vez que la API responde, desaparece y no vuelve a aparecer.
 */
export default function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8"
      style={{ backgroundColor: COLORS.navy }}
    >
      {/* Logo */}
      <div className="text-center">
        <p
          className="text-4xl sm:text-5xl tracking-widest"
          style={{ fontFamily: "'Anton', sans-serif", color: COLORS.gold }}
        >
          ANIMALITOS
        </p>
        <p
          className="text-sm tracking-widest mt-1"
          style={{ fontFamily: "'Space Mono', monospace", color: "rgba(247,243,232,0.4)" }}
        >
          HOY
        </p>
      </div>

      {/* Spinner con anillos concéntricos */}
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Anillo exterior */}
        <div
          className="absolute inset-0 rounded-full border-2 border-t-transparent animate-spin"
          style={{ borderColor: COLORS.gold, borderTopColor: "transparent", animationDuration: "1.1s" }}
        />
        {/* Anillo interior (gira al revés) */}
        <div
          className="absolute inset-3 rounded-full border-2 border-b-transparent animate-spin"
          style={{
            borderColor: "rgba(242,183,5,0.35)",
            borderBottomColor: "transparent",
            animationDuration: "0.75s",
            animationDirection: "reverse",
          }}
        />
        {/* Emoji central */}
        <span className="text-2xl select-none">🦜</span>
      </div>

      {/* Texto de estado */}
      <div className="text-center flex flex-col gap-1">
        <p
          className="text-sm"
          style={{ color: COLORS.cream, fontFamily: "'DM Sans', sans-serif" }}
        >
          Cargando resultados de hoy…
        </p>
        <p
          className="text-xs"
          style={{ color: "rgba(247,243,232,0.35)", fontFamily: "'Space Mono', monospace" }}
        >
         Estamos teniendo una alta demanda de clientes en este momento | 30seg de carga estiamdos.
        </p>
      </div>

      {/* Barra de progreso animada (indeterminada) */}
      <div
        className="w-48 h-0.5 rounded-full overflow-hidden"
        style={{ backgroundColor: "rgba(247,243,232,0.1)" }}
      >
        <div
          className="h-full rounded-full"
          style={{
            backgroundColor: COLORS.gold,
            width: "40%",
            animation: "loadBar 1.6s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes loadBar {
          0%   { margin-left: -40%; }
          100% { margin-left: 100%; }
        }
      `}</style>
    </div>
  );
}
