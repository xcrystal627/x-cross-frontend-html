/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/*.html",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require("tw-elements/dist/plugin.cjs"),
        require('@tailwindcss/line-clamp'),
    ],
    darkMode: "class"
}