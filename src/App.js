import React from "react";
import Forecast from "./Forecast";
import Search from "./Search";
import Current from "./Current";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Search />
        <Current />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
