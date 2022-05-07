import "@mui/material";
import "react-icons";
import { Container, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Container maxWidth="md">
      <CssBaseline />
      <Navbar />
    </Container>
  );
}

export default App;
