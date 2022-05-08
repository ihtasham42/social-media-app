import "@mui/material";
import "react-icons";
import { Card, Container, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/system";

const theme = createTheme({
  components: {
    MuiCardBase: {
      defaultProps: {
        variant: "outlined",
        padding: 2,
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
