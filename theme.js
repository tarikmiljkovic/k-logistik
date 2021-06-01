import { base } from "@theme-ui/presets";

const theme = {
  ...base,

  colors: {
    ...base.colors,
    text: "#0B3D91",
    background: "#fff",
    primary: "#0B3D91",
    secondary: "#05a",
    accent: "#609",
    muted: "#f6f6f6",
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
    wordWrap: "break-word",
    block: {},

    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
    bottom: {
      pb: 10,
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

  links: {
    primary: {
      // color: primary,
      // color: "#0B3D91",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },

  styles: {
    ...base.styles,

    // links: {
    //   color: colors.primary,
    //   primary: {
    //     color: colors.primary,
    //   },
    // },
    // a: {
    //   color: colors.primary,
    // },

    text: {
      postheading: {
        fontFamily: "heading",
        fontSize: "heading",
        fontWeight: "heading",
        lineHeight: "heading",
        padding: 0,
        my: 0,
        wordWrap: "break-word",
      },
      postsubheading: {
        fontFamily: "heading",
        fontWeight: "heading",
        lineHeight: "heading",
        padding: 0,
        my: 3,
        wordWrap: "break-word",
      },
      textbody: {
        mb: 4,
      },
    },

    headnavlink: {
      color: "#ffffff",
      alignSelf: "center",
      ml: [0, 3, 3],
      width: ["100%", "auto", "auto"],
      "&:hover": {
        cursor: "pointer",
        textDecoration: "underline",
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

export default theme;
