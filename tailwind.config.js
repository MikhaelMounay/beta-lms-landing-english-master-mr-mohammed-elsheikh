/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./index.html", "./src/**/*.{html,js,ts}"],
    theme: {
        extend: {
            colors: {
                primary: "#9333ea",
                secondary: "#a855f7",
                tertiary: "#a78bfa",
                quaternary: "#76C893",
                primaryContrast: "#EE6C4D",
                textColor: "#111",
                textColorLight: "#f3f4f6",
            },
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            animation: {
                "bounce-slow": "bounce 5s 1.5",
            }
        },
    },
    plugins: [],
};
