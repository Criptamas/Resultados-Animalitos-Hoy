import React from "react";
import { X, FileText } from "lucide-react";
import { COLORS } from "../theme.js";

const SECCIONES = [
  {
    titulo: "Resultados EL BATACAZO VENEZUELA",
    texto:
      "Este sitio web ofrece resultados de las loterias de animalitos en Venezuela. No estamos sujetos a ninguna agencia. Los resultados siempre seran de forma gratuita.",
  },
  {
    titulo: "Jugada Gratis",
    texto:
      "Todos los días se publican jugadas gratis a través de nuestras redes sociales. Normalmente participan entre 10 y 20 personas. La jugada gratis significa que no pagas afiliación, pero sí aplica la comisión en caso de ganar.",
  },
  {
    titulo: "Entrega de Pronósticos",
    texto:
      "Los pronósticos serán enviados a los afiliados a través de Telegram en los días hábiles de la lotería, poco antes de media hora del sorteo. Nos comprometemos a entregar la información de manera puntual y confiable de acuerdo a nuestros análisis.",
  },
  {
    titulo: "Responsabilidad del Usuario",
    texto:
      "El usuario es responsable de revisar y seguir las instrucciones proporcionadas en los pronósticos. No garantizamos resultados específicos, ya que la lotería es un juego de azar sujeto a un índice de acierto no mayor al 3%.",
  },
  {
    titulo: "Cancelaciones y Reembolsos",
    texto:
      "Las afiliaciones son semanales y no se aceptan cancelaciones ni reembolsos una vez realizado el pago, salvo que exista un problema técnico o de nuestra parte que impida la entrega de los pronósticos por más de dos días, caso en el cual se efectuará un reembolso proporcional a los días incumplidos.",
  },
  {
    titulo: "Privacidad y Datos Personales",
    texto:
      "Nos comprometemos a proteger la información personal de nuestros afiliados y a no compartirla con terceros sin su consentimiento previo.",
  },
  {
    titulo: "Modificación de Políticas",
    texto:
      "Nos reservamos el derecho de modificar estas políticas en cualquier momento. Cualquier cambio será comunicado oportunamente a los afiliados.",
  },
  {
    titulo: "Limitación de Responsabilidad",
    texto:
      "No nos hacemos responsables por pérdidas o resultados adversos derivados del uso de los pronósticos. La participación en la lotería siempre implica riesgo.",
  },
  {
    titulo: "Afiliación y Pago",
    texto:
      "La afiliación semanal consiste en el acceso a los pronósticos de la lotería de Animalitos durante una semana. El pago debe realizarse antes de que comience la semana de pronósticos, mediante los métodos establecidos en nuestra plataforma.",
  },
  {
    titulo: "Comisión por Acierto",
    texto:
      "La comisión es el pago AL GANAR que debe realizar el usuario inscrito. Funciona como incentivo para que el analista continúe generando buenas jugadas para los miembros VIP. Sin el pago de la misma, la afiliación queda automáticamente anulada.",
    nota: "No debe confundirse con la inscripción.",
  },
];

/* ── Modal de Términos y Condiciones ──────────────────────────────────── */
export function TerminosModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="w-full sm:max-w-2xl max-h-screen sm:max-h-[85vh] flex flex-col rounded-t-2xl sm:rounded-2xl overflow-hidden"
        style={{ backgroundColor: COLORS.navy, border: "1px solid rgba(242,183,5,0.25)" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 flex-shrink-0 border-b"
          style={{ borderColor: "rgba(242,183,5,0.2)" }}
        >
          <div className="flex items-center gap-3">
            <FileText size={18} color={COLORS.gold} />
            <span
              className="text-lg tracking-wide"
              style={{ fontFamily: "'Anton', sans-serif", color: COLORS.cream }}
            >
              TÉRMINOS Y CONDICIONES
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <X size={18} color={COLORS.cream} />
          </button>
        </div>

        {/* Cuerpo scrolleable */}
        <div className="overflow-y-auto px-6 py-5 flex-1">
          {/* Intro */}
          <p
            className="text-sm mb-5 pb-5 border-b"
            style={{
              color: "rgba(247,243,232,0.55)",
              borderColor: "rgba(247,243,232,0.1)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Al interactuar con nosotros, participar en dinámicas de redes sociales e inscribirte,
            aceptas los términos y condiciones aquí expuestos.
          </p>

          {/* Secciones */}
          <div className="flex flex-col gap-5">
            {SECCIONES.map((s, i) => (
              <div key={i}>
                {/* Número + título */}
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: "rgba(242,183,5,0.12)",
                      color: COLORS.gold,
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-sm font-bold"
                    style={{ color: COLORS.cream, fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {s.titulo}
                  </h3>
                </div>

                {/* Texto */}
                <p
                  className="text-sm leading-relaxed pl-8"
                  style={{ color: "rgba(247,243,232,0.65)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {s.texto}
                </p>

                {/* Nota destacada (si existe) */}
                {s.nota && (
                  <p
                    className="mt-2 pl-8 text-xs font-bold"
                    style={{ color: COLORS.gold }}
                  >
                    ⚠ {s.nota}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Footer de marcas */}
          <p
            className="mt-8 text-xs text-center"
            style={{ color: "rgba(247,243,232,0.3)", fontFamily: "'Space Mono', monospace" }}
          >
            @elprospectove | @elbatacazove · Animalitos HOY
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Botón que activa el modal (para usar en el footer) ───────────────── */
export function TerminosButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-xs underline underline-offset-2 transition-opacity hover:opacity-100 opacity-50 focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
      style={{ color: COLORS.cream, fontFamily: "'DM Sans', sans-serif" }}
    >
    Términos y Condiciones
    </button>
  );
}
