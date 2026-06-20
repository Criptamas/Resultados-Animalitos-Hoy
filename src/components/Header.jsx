import React from "react";
import { Instagram, Facebook, Send, Youtube } from "lucide-react";
import { COLORS, TELEGRAM_LINK } from "../theme.js";

export default function Header({ scrolled }) {
  return (
    <header
      className="fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b"
      style={{
        backgroundColor: scrolled ? "rgba(14,27,43,0.97)" : COLORS.navy,
        borderColor: scrolled ? "rgba(242,183,5,0.2)" : "rgba(242,183,5,0.4)",
        boxShadow: scrolled ? "0 6px 24px rgba(0,0,0,0.35)" : "none",
      }}
    >
      <div className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-300 ${scrolled ? "py-2 px-5" : "py-4 px-5"}`}>
        <div className="flex items-baseline gap-2">
          <span
            className={`transition-all duration-300 ${scrolled ? "text-base" : "text-2xl"}`}
            style={{ fontFamily: "'Anton', sans-serif", color: COLORS.gold, letterSpacing: "0.03em" }}
          >
          EL BATACAZO
          </span>
          <span
            className={`hidden sm:inline transition-all duration-300 ${scrolled ? "text-xs" : "text-sm"}`}
            style={{ color: COLORS.cream, fontFamily: "'Space Mono', monospace" }}
          >
            VENEZUELA
          </span>
        </div>
        <div className="flex items-center gap-4">
            <a target="_blank" rel="noopener noreferrer" href="http://youtube.com/@elprospectove" aria-label="Youtube" className="opacity-80 hover:opacity-100 transition-opacity focus-visible:ring-2 focus-visible:ring-amber-400 rounded">
            <Youtube size={scrolled ? 16 : 19} color={COLORS.cream} />
          </a>
          <a  target="_blank" rel="noopener noreferrer" href="http://instagram.com/elprospectove" aria-label="Instagram" className="opacity-80 hover:opacity-100 transition-opacity focus-visible:ring-2 focus-visible:ring-amber-400 rounded">
            <Instagram size={scrolled ? 16 : 19} color={COLORS.cream} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/elbatacazove" aria-label="Facebook" className="opacity-80 hover:opacity-100 transition-opacity focus-visible:ring-2 focus-visible:ring-amber-400 rounded">
            <Facebook size={scrolled ? 16 : 19} color={COLORS.cream} />
          </a>
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="opacity-80 hover:opacity-100 transition-opacity focus-visible:ring-2 focus-visible:ring-amber-400 rounded">
            <Send size={scrolled ? 16 : 19} color={COLORS.cream} />
          </a>
        </div>
      </div>
    </header>
  );
}
