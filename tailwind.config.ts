// import type { Config } from "tailwindcss";

// const config: Config = {
//     darkMode: ["class"],
//     content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//   	extend: {
//   		colors: {
//   			background: 'hsl(var(--background))',
//   			foreground: 'hsl(var(--foreground))',
//   			card: {
//   				DEFAULT: 'hsl(var(--card))',
//   				foreground: 'hsl(var(--card-foreground))'
//   			},
//   			popover: {
//   				DEFAULT: 'hsl(var(--popover))',
//   				foreground: 'hsl(var(--popover-foreground))'
//   			},
//   			primary: {
//   				DEFAULT: 'hsl(var(--primary))',
//   				foreground: 'hsl(var(--primary-foreground))'
//   			},
//   			secondary: {
//   				DEFAULT: 'hsl(var(--secondary))',
//   				foreground: 'hsl(var(--secondary-foreground))'
//   			},
//   			muted: {
//   				DEFAULT: 'hsl(var(--muted))',
//   				foreground: 'hsl(var(--muted-foreground))'
//   			},
//   			accent: {
//   				DEFAULT: 'hsl(var(--accent))',
//   				foreground: 'hsl(var(--accent-foreground))'
//   			},
//   			destructive: {
//   				DEFAULT: 'hsl(var(--destructive))',
//   				foreground: 'hsl(var(--destructive-foreground))'
//   			},
//   			border: 'hsl(var(--border))',
//   			input: 'hsl(var(--input))',
//   			ring: 'hsl(var(--ring))',
//   			chart: {
//   				'1': 'hsl(var(--chart-1))',
//   				'2': 'hsl(var(--chart-2))',
//   				'3': 'hsl(var(--chart-3))',
//   				'4': 'hsl(var(--chart-4))',
//   				'5': 'hsl(var(--chart-5))'
//   			}
//   		},
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		}
//   	}
//   },
//   plugins: [require("tailwindcss-animate")],
// };
// export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── Dcoder Design Tokens ───────────────────────────────────────
      colors: {
        // shadcn tokens (untouched)
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

        // Dcoder brand palette
        dc: {
          // Base surfaces
          cream: "#f0ebe0",
          cream2: "#e8e2d5",
          cream3: "#ddd7c8",
          paper: "#fffef9",

          // Typography
          ink: "#1a1208",
          ink2: "#3d3420",
          ink3: "#7a7060",

          // Brand accents
          red: "#c0392b",
          amber: "#c8860a",

          // Sticky note palette
          sticky: {
            yellow: "#fef08a",
            pink: "#ffd6d6",
            blue: "#c0e8f9",
            mint: "#c5f0d8",
            sand: "#e2dcc8",
          },
        },
      },

      // ─── Typography ─────────────────────────────────────────────────
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-space-mono)", "'Courier New'", "monospace"],
        hand: ["var(--font-caveat)", "cursive"],
      },

      // ─── Border Radius ───────────────────────────────────────────────
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // ─── Custom Animations ───────────────────────────────────────────
      keyframes: {
        // Marquee scroll
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        // Subtle float for collage cards
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--tw-rotate))" },
          "50%": { transform: "translateY(-6px) rotate(var(--tw-rotate))" },
        },
        // Fade in up
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "marquee-x": "marquee-x 26s linear infinite",
        float: "float 4s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease forwards",
      },

      // ─── Custom Spacing ──────────────────────────────────────────────
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
      },

      // ─── Background patterns ─────────────────────────────────────────
      backgroundImage: {
        "dot-pattern":
          "radial-gradient(circle, rgba(0,0,0,0.065) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-sm": "16px 16px",
        "dot-md": "22px 22px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;