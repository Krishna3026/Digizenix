/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"], darkMode: "class", theme: {
        extend: {
            colors: {
                "slate-800": "rgb(231, 84, 128)", // Pink shade
                "backgrount-input": "rgb(223, 82, 107)", // Pink shade
                "gray-dark": "rgba(247, 107, 135, .1)", // Pink shade
                "dark": "rgb(213, 54, 104)" // Pink shade
            }, 
            boxShadow: {
                "3xl": "0px 5px 10px rgba(4, 10, 34, .2)" // Keep unchanged
            }
            
        }, fontFamily: {
            "Inter": '"Inter", sans-serif'
        },
    }, plugins: [],
}
