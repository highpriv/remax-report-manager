/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#6c6c6c",
        smooth: "#9FA2B4",
        error: "#FF0000",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#FEAF00",
        secondary: "#F2EAE1",
        gray: "#F8F8F8",
        disabled: "#ffd987",
      },
      animation: {
        "form-error": "bounce-fast 0.5s 0s",
      },
      keyframes: {
        "bounce-fast": {
          "0%, 100%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      divideColor: {
        gray: "#F8F8F8",
      },
      borderColor: {
        secondary: "#F8D442",
      },
      textColor: {
        link: "#FEAF00",
      },
      boxShadow: {
        "outline-white": "2px 5px 10px 0px rgba(0, 0, 0, 0.10)",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
