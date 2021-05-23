import { base } from "@theme-ui/presets";
const theme = {
  ...base,

  colors: {
    ...base.colors,
  },
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  layout: {
    container: {
      maxWidth: "1170px",
      m: 0,
      mx: "auto",
    },
  },

  text: {
    heading: {
      // letterSpacing: -0.5
    },
    block: {},

    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
    bottom: {
      pb: 10,
    },

    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontWeight: 600,
    },
    subheading: {
      fontWeight: 300,
    },
  },

  header: {
    backgroundColor: "#3a4a4a",
    background: "#3a4a4a",
    color: "#fefefe",
    marginLeft: "0",
    marginRight: "auto",
  },

  buttons: {
    padding: 0,
    textDecoration: "underline",
    borderRadius: 0,
    radii: 0,

    primary: {
      color: "white",
      bg: "transparent",
      padding: 0,
      textDecoration: "underline",
      borderRadius: 0,
      radii: 0,

      "&:hover": {
        fontWeight: 700,
        cursor: "pointer",
      },
    },
    secondary: {
      color: "black",
      bg: "transparent",
      padding: 0,
      textDecoration: "underline",
      borderRadius: 0,
      radii: 0,

      "&:hover": {
        fontWeight: 700,
        textDecoration: "none",
        cursor: "pointer",
      },
    },

    menu: {
      color: "red",
      "@media screen and (min-width: 40em)": {
        display: "none",
      },
    },
  },

  styles: {
    ...base.styles,
    h1: {
      fontWeight: 400,
    },
    // header: {
    //   marginLeft: "0",
    //   marginRight: "auto",
    //   "@media screen and (max-width: 40em)": {
    //     // display: "none",
    //     display: "flex",
    //     flexDirection: "row",

    //     flexWrap: "wrap",
    //     flex: "1",
    //   },
    // },
    headnavlink: {
      // backgroundColor: "#3a4a4a",
      color: "#ffffff",
      alignSelf: "center",
      ml: [0,3,3],
      width: ["100%", "auto", "auto"],
      "&:hover": {
        cursor: "pointer",
        textDecoration: 'underline'
      },
    },

    navlink: {
      textDecoration: "underline",
      color: "black",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
};

console.log(theme);

export default theme;
