import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#121212",
        primary: "#2563eb",
        metallic: "#94a3b8",
        "metallic-dark": "#475569",
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at center, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
};
export default config;