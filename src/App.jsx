import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import LotterySelector from "./components/LotterySelector.jsx";
import ResultsModule from "./components/ResultsModule.jsx";
import FloatingPlayButton from "./components/FloatingPlayButton.jsx";
import { LOTERIAS as LOTERIAS_MOCK } from "./data/mockResults.js";
import { fetchResultados } from "./services/api.js";
import { COLORS } from "./theme.js";

export default function App() {
  const [loterias, setLoterias] = useState(LOTERIAS_MOCK);
  const [fuente, setFuente] = useState("mock"); // "mock" | "api"
  const [activeId, setActiveId] = useState(LOTERIAS_MOCK[0].id);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  fetchResultados().then((data) => {
    console.log("RESPUESTA API:", data);

    if (data) {
      setLoterias(data);
      setFuente("api");
      setActiveId(data[0].id);
    }
  });
}, []);

  // Header más fino al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intenta traer los datos reales de backend.
  useEffect(() => {
    fetchResultados().then((data) => {
      if (data) {
        setLoterias(data);
        setFuente("api");
        setActiveId(data[0].id);
      }
    });
  }, []);

  const loteriaActiva = useMemo(
    () => loterias.find((l) => l.id === activeId) || loterias[0],
    [loterias, activeId]
  );

  const hoyTexto = useMemo(() => {
    const texto = new Date().toLocaleDateString("es-VE", { weekday: "long", day: "numeric", month: "long" });
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.navy }}>
      <Header scrolled={scrolled} />
      <div className="h-16 sm:h-20" />

      <section className="px-5 pt-10 pb-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.red }} />
          <span className="text-xs uppercase tracking-widest" style={{ color: COLORS.red, fontFamily: "'Space Mono', monospace" }}>
            En vivo · actualiza cada hora
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl leading-none" style={{ fontFamily: "'Anton', sans-serif", color: COLORS.cream, letterSpacing: "0.02em" }}>
          RESULTADOS
        </h1>
        <p className="mt-2 text-sm sm:text-base" style={{ color: "rgba(247,243,232,0.65)" }}>
          {hoyTexto} — Selecciona tu lotería para ver los 12 sorteos del día.
        </p>

        {fuente === "mock" && (
          <p className="mt-3 text-xs inline-block px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(242,183,5,0.12)", color: COLORS.gold }}>
            Mostrando datos de ejemplo — conecta tu API real en .env (VITE_API_URL)
          </p>
        )}
      </section>

      <LotterySelector loterias={loterias} activeId={activeId} onSelect={setActiveId} />
      <ResultsModule loteria={loteriaActiva} />

      <footer className="px-5 pb-28 max-w-6xl mx-auto text-center">
        <p className="text-xs" style={{ color: "rgba(247,243,232,0.4)" }}>
          Resultados con fines informativos · Juega con responsabilidad +18
        </p>
      </footer>

      <FloatingPlayButton />
    </div>
  );
}
