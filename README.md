# Resultados Animalitos — Sitio en React + Tailwind

Sitio web que muestra los resultados del día de varias loterías de animalitos
(Guácharo Activo, Lotto Activo, La Granjita, Toro Activo, Súper Gana), con
12 sorteos por lotería (hora, fecha, imagen y nombre del resultado).

## Requisitos

- Node.js 18 o superior
- npm

## Instalación y arranque

```bash
npm install
npm run dev
```

Esto abre el sitio en `http://localhost:5173`.

## Conectar tu API real (backend en Node)

Por ahora el sitio usa datos de ejemplo (`src/data/mockResults.js`). Para
conectar tu backend real:

1. Copia `.env.example` a `.env`.
2. Coloca la URL de tu endpoint en `VITE_API_URL`.
3. Tu API debe responder en formato JSON con esta forma (un array, una
   entrada por lotería):

```json
[
  {
    "id": "guacharo",
    "nombre": "Guácharo Activo",
    "color": "#2F8F5B",
    "emoji": "🦜",
    "resultados": [
      {
        "hora": "08:00 AM",
        "fecha": "16/06/2026",
        "nombre": "Delfín",
        "imagen": "https://tubackend.com/img/delfin.png"
      }
    ]
  }
]
```

Cada lotería debe traer 12 objetos en `resultados` (uno por cada sorteo del
día). Si tu API no responde o `VITE_API_URL` no está configurado, el sitio
sigue funcionando con los datos de ejemplo automáticamente — no se rompe
nada (ver `src/services/api.js`).

## Cómo personalizar

- **Enlace de Telegram del botón "JUEGA GRATIS"**: cámbialo en `src/theme.js`
  (`TELEGRAM_LINK`). Ahí mismo está el ejemplo `https://t.me/JuegaGratisVE`.
- **Redes sociales del header**: edita los `href="#"` en
  `src/components/Header.jsx`.
- **Colores de marca**: están centralizados en `src/theme.js` (`COLORS`).
- **Loterías de ejemplo**: edita o agrega entradas en
  `src/data/mockResults.js` (deja de usarse en cuanto conectes la API real).

## Estructura del proyecto

```
src/
  App.jsx                    Composición principal + fetch a la API + fallback a mock
  theme.js                   Colores de marca y enlace de Telegram
  index.css                  Tailwind + fuentes + animación del botón flotante
  data/mockResults.js        Datos de ejemplo y contrato esperado de la API
  services/api.js            Llamada a tu backend en Node
  components/
    Header.jsx                Encabezado fijo, se vuelve más fino al hacer scroll
    LotterySelector.jsx        Selector (tabs) de loterías disponibles
    ResultsModule.jsx          Módulo con los 12 resultados de la lotería activa
    ResultCard.jsx              Tarjeta individual: hora, imagen/animal y nombre
    FloatingPlayButton.jsx     Botón flotante "JUEGA GRATIS" → Telegram
```

## Build para producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para subir a cualquier hosting estático
(Vercel, Netlify, un VPS con Nginx, etc.).
