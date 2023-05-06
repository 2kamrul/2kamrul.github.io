const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    // no-unused-vars
    theme: {
        extend: {
            colors: {
                // "primary-light": colors.sky[600],
                // "primary-main": colors.sky[800],
                // "primary-dark": colors.sky[900],

                // "primary-light": colors.teal[600],
                // "primary-main": colors.teal[800],
                // "primary-dark": colors.teal[900],

                "primary-light": colors.cyan[600],
                "primary-main": colors.cyan[800],
                "primary-dark": colors.cyan[900],

                // "secondary-light": colors.orange[400],
                // "secondary-main": colors.orange[500],
                // "secondary-dark": colors.orange[600],

                // "secondary-light": colors.amber[500],
                // "secondary-main": colors.amber[600],
                // "secondary-dark": colors.amber[700],

                "secondary-light": colors.amber[600],
                "secondary-main": colors.amber[700],
                "secondary-dark": colors.amber[900],
            },
            animation: {
                "pulse-heartbeat": "pulseHeartbeat 3s ease-in-out infinite",
            },

            keyframes: (theme) => ({
                pulseHeartbeat: {
                    "0%": { transform: "scale(1)", opacity: 0.5 },
                    "50%": { transform: "scale(1.3)", opacity: 1 },
                    "100%": { transform: "scale(1)", opacity: 0.5 },
                },
            }),
        },
    },
    plugins: [],
}
