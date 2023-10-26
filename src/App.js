import "./App.css";
import Navbar from "./Componants/Navbar";
import Home from "./Componants/Home";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div>
      <Navbar mode={mode} toggleMode={toggleMode} />

      <Home Heding={"Enter the text :-"} mode={mode} toggleMode={toggleMode} />
    </div>
  );
}

export default App;
