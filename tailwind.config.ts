import type { Config } from "tailwindcss"
const {nextui} = require("@nextui-org/react");
const defaultTheme = require('tailwindcss/defaultTheme')
const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
     './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          '80': '#8c6909',
          '70': '#b34b1e',
          '50': '#ee6529',
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)",
      // },
      // rgba(99, 99, 99, .2) 0px 2px 8px 0px;
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        'rubik-glitch-pop': ["Rubik Glitch Pop", 'sans-serif'], // Định nghĩa font-family mặc định
        'tomatos':['tomatos','sans-serif'],
        'poppins':['poppins','sans-serif']
      },
      dropShadow: {
        'btn': ' 0px 2px 8px 0px rgba(99, 99, 99, .2)'
      }
      ,boxShadow:{
        // 4px 4px 20px 0px rgba(0, 0, 0, .04), 0px 0px 12px 0px rgba(235, 255, 209, .1);
        'btn':' 0px 2px 8px 0px rgba(99, 99, 99, .2)',
        'itemTrave':'4px 4px 20px 0px rgba(0, 0, 0, .04), 0px 0px 12px 0px rgba(235, 255, 209, .1)'
      },
      backgroundImage:theme => ({
        'bl': 'linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
        'gradient-greatTrips':'linear-gradient(180deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, .9) 60.94%, #fff)',
        'gradient-itemCardTour':'linear-gradient(180deg, transparent 54.17%, #000);'
      })
      
    },
  },
  plugins: [require("tailwindcss-animate"),nextui()],
} satisfies Config

export default config