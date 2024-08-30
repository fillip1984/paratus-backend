import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import formsPlugin from "@tailwindcss/forms";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      primary: "#6E7E85",
      secondary: "#E2E2E2",
      accent: "#B7CECE",
      accent2: "#BBBAC6",
      black: "#1a1f16",
      white: "#fff",
      danger: "#EB4C7C",
      calm: "hsl(262, 73%, 41%)",
      warning: "#F0E3B2",
      // see: https://coolors.co/1a1f16-1e3f20-345830-4a7856-94ecbe
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [formsPlugin],
} satisfies Config;
