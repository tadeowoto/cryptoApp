import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#192331", // Fondo principal
        "grid-bg": "#252F3E", // Fondo para bentogrids
        highlight: "#3FDBAF", // Verde agua para resaltar
        "text-white": "#FFFFFF", // Letras blancas
        success: "#00E6A8", // Verde para subidas
        failure: "#FF5757",
      },
    },
  },
  plugins: [],
} satisfies Config;
