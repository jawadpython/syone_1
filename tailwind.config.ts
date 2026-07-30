import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#071E61",
        "navy-deep": "#010A29",
        electric: "#0569FF",
        violet: "#5E35F2",
        cyan: "#16BCEB",
        "text-gray": "#334155",
        "text-muted": "#64748B",
        "bg-subtle": "#F4F7FB",
        "bg-mist": "#EEF3FA",
        border: "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "100rem",
      },
      boxShadow: {
        card: "0 8px 30px rgba(7, 30, 97, 0.06)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 85% 40%, rgba(5,105,255,0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 70% 70%, rgba(94,53,242,0.25), transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
