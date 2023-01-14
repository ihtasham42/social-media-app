import { createTheme } from "@mui/material";
import { borderBottom } from "@mui/system";

const theme = createTheme({
    components: {
      // Name of the component
      MuiStack: {
        styleOverrides: {
          // Name of the slot
          root: {
            paddingLeft: "10px",
            paddingRight: "10px",
            borderBottom: "1px solid #000",
            bg: "rgba(255,255,255,0.8)"
          },
        },
      },
    },
  });

  export default theme;