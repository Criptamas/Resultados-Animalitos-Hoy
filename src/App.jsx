import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import LotterySelector from "./components/LotterySelector.jsx";
import ResultsModule from "./components/ResultsModule.jsx";
import FloatingPlayButton from "./components/FloatingPlayButton.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import { loadCache, fetchResultados } from "./services/api.js";
import { COLORS } from "./theme.js";
import { TerminosModal, TerminosButton } from "./components/TerminosModal.jsx";

/*
  FLUJO:
  ┌─ ¿Hay caché en localStorage? ─────────────────────────────────────────┐
  │  SÍ  → Mostrar resultados del caché de inmediato                      │
  │        + fetch en background → si responde: actualizar + guardar       │
  │  NO  → Mostrar <LoadingScreen> mientras fetch completa                 │
  │        → Cuando responde: guardar + mostrar resultados                 │
  │                                                                        │
  │  Si la API responde [] o falla → mantener lo que hay                  │
  └────────────────────────────────────────────────────────────────────────┘
*/
export default function App() {
  const cached = useMemo(() => loadCache(), []);

  // null = primera visita sin caché → mostramos LoadingScreen
  const [loterias, setLoterias]   = useState(cached);
  const [activeId, setActiveId]   = useState(cached?.[0]?.id ?? null);
  const [scrolled, setScrolled]   = useState(false);
  const [apiViva, setApiViva]     = useState(false); // true una vez que la API responde con datos
  const [verTerminos, setVerTerminos] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    fetchResultados().then((data) => {
      if (!data) return; // [] o error → no tocamos el estado
      setLoterias(data);
      setApiViva(true);
      setActiveId((prev) => {
        // Conservamos la pestaña activa si sigue existiendo, si no, la primera.
        return data.some((l) => l.id === prev) ? prev : data[0].id;
      });
    });
  }, []);

  const loteriaActiva = useMemo(
    () => loterias?.find((l) => l.id === activeId) ?? loterias?.[0],
    [loterias, activeId]
  );

  const hoyTexto = useMemo(() => {
    const t = new Date().toLocaleDateString("es-VE", {
      weekday: "long", day: "numeric", month: "long",
    });
    return t.charAt(0).toUpperCase() + t.slice(1);
  }, []);

  // Primera visita sin caché: mostrar pantalla de carga hasta que la API responda.
  if (!loterias) return <LoadingScreen />;

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.navy }}>
      <Header scrolled={scrolled} />
      <div className="h-16 sm:h-20" />

      <section className="px-5 pt-10 pb-6 max-w-6xl mx-auto">
        {/* Indicador de estado */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{
              backgroundColor: apiViva ? COLORS.green : COLORS.gold,
              boxShadow: apiViva ? `0 0 6px ${COLORS.green}` : "none",
            }}
          />
          <span
            className="text-xs uppercase tracking-widest"
            style={{
              color: apiViva ? COLORS.green : "rgba(247,243,232,0.45)",
              fontFamily: "'Space Mono', monospace",
            }}
          >
            {apiViva ? "En vivo · datos de hoy" : "Resultados del sorteo anterior · Hasta el momento..."}
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl leading-none"
          style={{ fontFamily: "'Anton', sans-serif", color: COLORS.cream, letterSpacing: "0.02em" }}
        >
          RESULTADOS
        </h1>
        <p className="mt-2 text-sm" style={{ color: "rgba(247,243,232,0.55)" }}>
          {hoyTexto}
        </p>
      </section>

      <LotterySelector loterias={loterias} activeId={activeId} onSelect={setActiveId} />

      {loteriaActiva && <ResultsModule loteria={loteriaActiva} />}

      <footer className="px-5 pb-28 max-w-6xl mx-auto text-center">
        <p className="text-xs" style={{ color: "rgba(247,243,232,0.3)" }}>
          Resultados con fines informativos · Juega con responsabilidad +18
        </p>


        <p  className="text-xs" style={{ color: "rgba(247,243,232,0.3)" }}> Al usar nuestro sitio web usted acepta nuestros:  <TerminosButton onClick={() => setVerTerminos(true)} /> </p>
      </footer>

      <FloatingPlayButton />

{verTerminos && <TerminosModal onClose={() => setVerTerminos(false)} />}
    
    </div>
  );
}
