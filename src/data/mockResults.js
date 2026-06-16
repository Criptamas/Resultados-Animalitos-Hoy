/**
 * DATOS DE EJEMPLO (mock)
 * ------------------------------------------------------------------
 * Esto se usa solo mientras no hay una API real conectada (ver
 * src/services/api.js). En cuanto tu backend en Node responda,
 * esta data se reemplaza automáticamente.
 *
 * CONTRATO ESPERADO DE LA API — GET /api/resultados
 * Debe devolver un array así:
 *
 * [
 *   {
 *     "id": "guacharo",              // identificador único de la lotería
 *     "nombre": "Guácharo Activo",
 *     "color": "#2F8F5B",            // opcional, color de marca (hex)
 *     "emoji": "🦜",                  // opcional, se usa si "imagen" viene vacío
 *     "resultados": [
 *       {
 *         "hora": "08:00 AM",
 *         "fecha": "16/06/2026",
 *         "nombre": "Delfín",
 *         "imagen": "https://tubackend.com/img/delfin.png"
 *       }
 *       // ... 12 resultados en total por lotería (uno por cada sorteo del día)
 *     ]
 *   }
 *   // ... una entrada por cada lotería disponible
 * ]
 * ------------------------------------------------------------------
 */
import { COLORS } from "../theme.js";

const ANIMALES = [
  { nombre: "Delfín", emoji: "🐬" },
  { nombre: "León", emoji: "🦁" },
  { nombre: "Toro", emoji: "🐂" },
  { nombre: "Águila", emoji: "🦅" },
  { nombre: "Tigre", emoji: "🐯" },
  { nombre: "Caballo", emoji: "🐴" },
  { nombre: "Mono", emoji: "🐒" },
  { nombre: "Gallo", emoji: "🐓" },
  { nombre: "Vaca", emoji: "🐄" },
  { nombre: "Zorro", emoji: "🦊" },
  { nombre: "Oso", emoji: "🐻" },
  { nombre: "Elefante", emoji: "🐘" },
  { nombre: "Caimán", emoji: "🐊" },
  { nombre: "Jirafa", emoji: "🦒" },
  { nombre: "Pavo", emoji: "🦃" },
  { nombre: "Cebra", emoji: "🦓" },
];

const HORAS = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

function generarResultados(seed) {
  const hoy = new Date().toLocaleDateString("es-VE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return HORAS.map((hora, i) => {
    const animal = ANIMALES[(seed + i * 3) % ANIMALES.length];
    return {
      hora,
      fecha: hoy,
      nombre: animal.nombre,
      imagen: null,
      emoji: animal.emoji,
    };
  });
}

export const LOTERIAS = [
  {
    id: "guacharo",
    nombre: "Guácharo Activo",
    emoji: "",
    color: COLORS.green,
    resultados: generarResultados(0),
  },
  {
    id: "lotto",
    nombre: "Lotto Activo",
    emoji: "🎯",
    color: COLORS.gold,
    resultados: generarResultados(2),
  },
  {
    id: "granjita",
    nombre: "La Granjita",
    emoji: "🐄",
    color: COLORS.brown,
    resultados: generarResultados(5),
  },
  {
    id: "toro",
    nombre: "Toro Activo",
    emoji: "🐂",
    color: COLORS.red,
    resultados: generarResultados(7),
  },
  {
    id: "supergana",
    nombre: "Súper Gana",
    emoji: "🍀",
    color: COLORS.purple,
    resultados: generarResultados(9),
  },
  {
    id: "el-guacharito-millonario",
    nombre: "Guacharito Millonario",
    emoji: "💎",
    color: COLORS.purple,
    resultados: generarResultados(9),
  },
];
