/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0D1117',
                secondary: '#161B22',
                accent: '#58A6FF',
            },
        },
    },
    plugins: [],
};
