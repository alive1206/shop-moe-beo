import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#083448",
        accent: "#6fc2c0",
        secondary: "#e5938e",
        teriary: "#f1f1f1",
      },
      container: {
        center: true,
      },
      flex: {
        "2": "2 1 0%",
      },
    },
  },
  plugins: [],
};
export default config;
