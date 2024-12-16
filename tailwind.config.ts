import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['ClashDisplay', 'sans-serif'], // Headings ke liye
        satoshi: ['Satoshi', 'sans-serif'],    // Paragraphs ke liye
      },
  
      screens: {
        xm: "320px",
        xmm:"360px",
      },
    },
  },
  plugins: [],
} satisfies Config;
