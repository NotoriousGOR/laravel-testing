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
                    "dark-grey": "#6d706f",
                    mint: "#20c991",
                    "hot-pink": "#ff1f4f",
                    "light-grey": "#dae0de",
                },
                light: {},
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
