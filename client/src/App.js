import "@mui/material";
import "react-icons";
import { Card, Container, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...{
            padding: theme.spacing(2),
          },
        }),
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Navbar />
        <Card>aasdas</Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;
