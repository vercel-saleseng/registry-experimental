import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // AWS Cloudscape specific colors
        aws: {
          blue: {
            "300": "#b8e7ff",
            "400": "#75cfff",
            "500": "#42b4ff",
            "600": "#006ce0",
            "800": "#002b66",
            "900": "#001129",
          },
          green: {
            "500": "#2bb534",
            "600": "#00802f",
            "900": "#001401",
          },
          red: {
            "500": "#ff7a7a",
            "600": "#db0000",
            "900": "#1f0000",
          },
          yellow: {
            "600": "#ffe347",
            "700": "#fbd332",
            "900": "#191100",
          },
          grey: {
            "100": "#f9f9fa",
            "200": "#ebebf0",
            "300": "#dedee3",
            "350": "#c6c6cd",
            "450": "#a4a4ad",
            "500": "#8c8c94",
            "550": "#656871",
            "600": "#424650",
            "650": "#333843",
            "700": "#232b37",
            "750": "#1b232d",
            "800": "#161d26",
            "850": "#131920",
            "900": "#0f141a",
          },
          severity: {
            yellow: "#f2cd54",
            red: "#ce3311",
            orange: "#f89256",
            "dark-red": "#870303",
          },
        },
      },
      fontFamily: {
        // AWS Cloudscape font families
        sans: ['"Open Sans"', "Helvetica", "Arial", "sans-serif"],
        mono: [
          "Monaco",
          "Menlo",
          "Consolas",
          '"Courier Prime"',
          "Courier",
          '"Courier New"',
          "monospace",
        ],
      },
      fontSize: {
        // AWS Cloudscape typography sizes
        "display-large": [
          "42px",
          {
            lineHeight: "48px",
            fontWeight: "700", // Bold
          },
        ],
        "display-large-light": [
          "42px",
          {
            lineHeight: "48px",
            fontWeight: "300", // Light
          },
        ],
        "heading-xl": [
          "24px",
          {
            lineHeight: "30px",
            fontWeight: "700", // Bold
          },
        ],
        "heading-l": [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: "700", // Bold
          },
        ],
        "heading-m": [
          "18px",
          {
            lineHeight: "22px",
            fontWeight: "700", // Bold
          },
        ],
        "heading-s": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "700", // Bold
          },
        ],
        "heading-xs": [
          "14px",
          {
            lineHeight: "18px",
            fontWeight: "700", // Bold
          },
        ],
        "body-m": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400", // Normal
          },
        ],
        "body-s": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400", // Normal
          },
        ],
        code: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400", // Normal
          },
        ],
        preformatted: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400", // Normal
          },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
