import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // your primary color
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    // fontFamily: "Montserrat, sans-serif",
    // h4: {
    //   fontWeight: 600,
    // },
    // body2: {
    //   fontSize: "0.9rem",
    // },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

export default theme;
