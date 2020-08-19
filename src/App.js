import React from "react";
import { CssBaseline } from "@material-ui/core";
import "./App.css";
import Home from "./components/Home";
import "typeface-roboto"
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Home />
    </div>
  );
}

export default App;
