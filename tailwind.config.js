const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                dark: {
                    primary: "#efe188",
                    secondary: "#e8b896",
                    accent: "#024193",
                    neutral: "#19151E",
                    "base-100": "#322E38",
                    info: "#9AD0EF",
                    success: "#74ECAE",
                    warning: "#FCC85A",
                    error: "#FC2D22",
                },
                light: {
                    primary: "#2b7ed1",
                    secondary: "#5458bc",
                    accent: "#fc0f3e",
                    neutral: "#151C28",
                    "base-100": "#EAE9ED",
                    info: "#4C8EC8",
                    success: "#1A7F55",
                    warning: "#B48408",
                    error: "#F20D3E",
                },
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
