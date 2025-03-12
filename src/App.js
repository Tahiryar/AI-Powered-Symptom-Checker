import React from "react";
import SymptomChecker from "./components/SymptomChecker";
import Navbar from "./components/Navbar";
import "./App.css"; // Import a CSS file for global styles

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <SymptomChecker />
      </div>
    </div>
  );
}

export default App;