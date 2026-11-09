import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: { fontFamily: { head: ["Anton", "Impact", "sans-serif"], body: ["Inter", "system-ui", "sans-serif"] } },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        robidark: {
          primary: "#ff5a00", "primary-content": "#000000", secondary: "#ff5a00", accent: "#ff5a00",
          neutral: "#111111", "base-100": "#07090b", "base-200": "#0d1013", "base-300": "#171b20", "base-content": "#ffffff",
        },
        robilight: {
          primary: "#ff5a00", "primary-content": "#000000", secondary: "#ff5a00", accent: "#ff5a00",
          neutral: "#111111", "base-100": "#faf8f5", "base-200": "#ffffff", "base-300": "#ece8e2", "base-content": "#111111",
        },
      },
    ],
  },
};
