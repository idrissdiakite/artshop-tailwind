module.exports = {
  purge: ["./*.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill-md": "repeat(auto-fill, 430px)",
        "auto-fill-xl": "repeat(auto-fill, 290px)",
        "auto-fill-2xl": "repeat(auto-fill, 600px)",
      },
      height: {
        sm: "800px",
        md: "700px",
        lg: "550px",
        xl: "350px",
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
        '9/10': '90%'
       }
    },
  },
};
