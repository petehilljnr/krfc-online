import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Draws } from "./pages/Draws";
import { Teams } from "./pages/Teams";
import { Results } from "./pages/Results";
import { Programmes } from "./pages/Programmes";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/draws" element={<Draws />} />
        <Route path="/results" element={<Results />} />
        <Route path="/programme" element={<Programmes />} />
      </Routes>
    </div>
  );
}

export default App;
