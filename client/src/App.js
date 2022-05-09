import "@mui/material";
import "react-icons";
import "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import ExploreView from "./views/ExploreView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<ExploreView />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
