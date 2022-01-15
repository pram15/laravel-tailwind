module.exports = {
    content: [
        "./resources/views/*.blade.php",
        "./resources/views/admin/*.blade.php",
        "./resources/views/template/*.blade.php",
    ],
    theme: {
        extend: {
            colors: {
                ungu: "#5267DF",
                merah: "#FA5959",
                biru: "#242A45",
                "abu-abu": "#9194A2",
                putih: "#f7f7f7",
            },

            container: {
                center: true,
                padding: "1rem",
                screens: {
                    lg: "1124px",
                    xl: "1124px",
                    "2xl": "1124px",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
