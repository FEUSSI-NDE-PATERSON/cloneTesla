import React from "react";
import Navbar from "./Component/Navbar";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Component/Main";
import Models from "./pages/Models";
import Modelx from "./pages/Modelx";
import Model3 from "./pages/Model3";
import Modely from "./pages/Modely";

function App() {
  return (
    <div className="relative">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/models" element={<Models />} />
          <Route path="/modelx" element={<Modelx />} />
          <Route path="/modely" element={<Modely />} />
          <Route path="/model3" element={<Model3 />} />

          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
