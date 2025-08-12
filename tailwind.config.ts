import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A192F",
          navy2: "#112240",
          aqua: "#00AAFF",
          gray: "#C9D6DF"
        }
      },
      boxShadow: {
        card: "0 8px 20px rgba(0,0,0,0.12)",
        hover: "0 12px 28px rgba(0,0,0,0.16)"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0A192F 0%, #112240 60%)"
      }
    },
  },
  plugins: [],
};
export default config;
