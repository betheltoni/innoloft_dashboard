/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                white: {
                    5: "rgba(255, 255, 255, 0.05)",
                    10: "rgba(255, 255, 255, 0.1)",
                    20: "rgba(255, 255, 255, 0.2)",
                    30: "rgba(255, 255, 255, 0.3)",
                    40: "rgba(255, 255, 255,0.4)",
                    50: "rgba(255, 255, 255, 0.5)",
                    60: "rgba(255, 255, 255, 0.6)",
                    70: "rgba(255, 255, 255, 0.7)",
                    80: "rgba(255, 255, 255, 0.8)",
                    90: "rgba(255, 255, 255, 0.9)",
                    100: "rgba(255, 255, 255, 1)",
                },
               primary: {
                100: "rgba(39, 46, 113, 1)"
               },
            },
        },
    },
    plugins: [],
}
