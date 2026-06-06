import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // === LOGO-DERIVED COLOR PALETTE ===
        // Logo has two colors: light green oval + deep teal-green text

        // Light Green / Logo oval background tones
        cream: "#f1f6de",    // Very light green (lighter version of logo oval)
        sand: "#e3ecc1",     // Logo oval background color (exact)
        parchment: "#d8e1af", // Logo oval — slightly deeper

        // Dark Green / Logo text tones
        bark: "#0b3b36",     // Darkest green (deep shadows, high contrast text)
        forest: "#115750",   // Logo text color — primary brand green (exact)
        clay: "#1a7c73",     // Mid green (hover states, accents)
        ember: "#259a8f",    // Lighter green-teal

        // Accent / Support tones derived from logo palette
        meadow: "#1a7c73",   // Teal complement
        gold: "#9bb84a",     // Muted earthy green-gold (drawn from the logo warmth)
        moss: "#e3ecc1",     // Alias for sand/logo oval
      },
      boxShadow: {
        soft: "0 16px 40px rgba(92, 26, 16, 0.14)",
        card: "0 14px 40px rgba(92, 26, 16, 0.10)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      backgroundImage: {
        // Hero gradient using logo parchment & maroon tones
        "hero-glow":
          "radial-gradient(circle at top, rgba(237, 234, 187, 0.55), transparent 50%), radial-gradient(circle at 20% 20%, rgba(92, 26, 16, 0.06), transparent 35%)"
      },
      keyframes: {
        fadeIn: {
          "from": { opacity: "0", transform: "scale(0.96)" },
          "to": { opacity: "1", transform: "scale(1)" }
        }
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out forwards"
      }
    }
  },
  plugins: []
};

export default config;
