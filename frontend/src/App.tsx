import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
