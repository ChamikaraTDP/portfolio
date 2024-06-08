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
        "background-default": "var(--background-default)",
        "background-secondary": "var(--background-secondary)",
        "border-default": "var(--border-default)",
        "border-secondary": "var(--border-secondary)",
        "text-default": "var(--text-default)",
        "text-secondary": "var(--text-secondary)",
        "text-white": "var(--text-white)",
        "title-primary": "var(--title-primary)",
        "title-secondary": "var(--title-secondary)",
        "button-focus": "var(--button-focus)",
      },
    },
  },
  plugins: [],
};
export default config;
