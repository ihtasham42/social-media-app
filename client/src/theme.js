import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...{
            padding: theme.spacing(1),
            direction: "rtl",
            width: "100%"
           // borderWidth: "1.5px",
          // boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
           
           
          },
        }),
      },
    },
    MuiContainer: {
      defaultProps: {
        
        maxWidth: "xl",
        disableGutters: "true"

        
      },
    },
  },
});
export default theme;