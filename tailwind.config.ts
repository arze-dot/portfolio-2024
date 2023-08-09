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
        "dark-hard": "#27374D",
        "dark-semihard": "#526D82",
        "dark-mid": "#9DB2BF",
        "dark-low": "#DDE6ED",
      },
    },
  },
  plugins: [],
};
export default config;
