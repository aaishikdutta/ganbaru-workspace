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
        light: {
          primary: '#A1BE95',
          secondary: '#F98866',
          accent: '#FFF2D7'
        },
        dark: {
          primary: '#42624A',
          secondary: '#A24936',
          accent: '#D36135'
        }
        
      },
      fontFamily: {
        'sans': 'var(--afacad)'
      },
    },
  },
  plugins: [],
};
export default config;
