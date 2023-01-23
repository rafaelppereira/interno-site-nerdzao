/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, sans-serif",
      },

      colors: {
        pink: {
          500: "#FF668A",
        },

        purple: {
          200: "rgba(142,79,124,0.6)",
          500: "#8213F1",
        },

        linear: {
          purpletopink:
            "linear-gradient(90.06deg, #FF668A -8.46%, #8213F1 115.57%);",
        },
      },

      backgroundImage: {
        banner: "url(/banner-background.png)",
      },
    },
  },
  plugins: [],
};
