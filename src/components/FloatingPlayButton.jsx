import React from "react";
import { Gamepad2 } from "lucide-react";
import { COLORS, TELEGRAM_LINK } from "../theme.js";

export default function FloatingPlayButton() {
  return (
    <a
      href={TELEGRAM_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-5 py-3 rounded-full shadow-lg fab-pulse focus-visible:ring-2 focus-visible:ring-amber-400"
      style={{ backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: "'Anton', sans-serif" }}
    >
      <Gamepad2 size={20} />
      <span className="text-sm tracking-wide"> TRIPLETA GRATIS</span>
    </a>
  );
}
