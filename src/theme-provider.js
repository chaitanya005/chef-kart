import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const colorPalette = {
  primary: {
    lighter: "#fff",
    light: "#A8A8A8",
    main: "#ff8802",
    inherit: "rgba(0,0,0,0)",
  },
  secondary: {
    black: "#000000",
    inherit: "rgba(0,0,0,0)",
  },
};

const lightTheme = createTheme({
  typography: {
    fontFamily: ["Open Sans"],
  },
  palette: {
    mode: "light",
    divider: "#ACACAC",
    primary: {
      light: colorPalette.primary.light,
      main: colorPalette.primary.main,
    },
    secondary: {
      main: colorPalette.secondary.black,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          color: colorPalette.primary.light,
        },
      },
      variants: [
        {
          props: { variant: "round-outlined", color: "primary" },
          style: {
            border: `1px solid ${colorPalette.primary.light}`,
            borderRadius: "50px",
            padding: "3px 20px",
          },
        },
        {
          props: { variant: "menu-contained", color: "primary" },
          style: {
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "10px",
            padding: "5px 25px",
            fontWeight: "bold",
            fontSize: "12px",
            "&:hover": {
              backgroundColor: "black",
            },
          },
        },
      ],
    },
  },
});

export function ThemeProvider({ children, ...props }) {
  return (
    <MuiThemeProvider theme={lightTheme} {...props}>
      {children}
    </MuiThemeProvider>
  );
}
export default ThemeProvider;
