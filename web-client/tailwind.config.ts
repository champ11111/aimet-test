import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mitr': ['Mitr', 'sans-serif']
      },
      backgroundImage: {
        'blur-low': "url('/blur-low.png')",
        'blur-severe': "url('/blur-severe.png')",
      },
      screens: {
        'mobile': '0px',
        'tablet': '640px',
        'screen': '1133px',
      }
    },
  },
  plugins: [],
};
export default config;
