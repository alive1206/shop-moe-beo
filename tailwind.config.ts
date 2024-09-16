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
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
export default config;
