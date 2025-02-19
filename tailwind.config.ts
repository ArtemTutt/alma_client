import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F3EE", // Цвет фона
        primary: "#C5A491", // Основной цвет
        text: "#2D2D2D", // Цвет текста
      },
    },
  },
  plugins: [],
} satisfies Config;
