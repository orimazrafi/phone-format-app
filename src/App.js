import React from "react";
import "./App.css";
import { PhoneFormat } from "./components/PhoneFormat";
import { UseNumberHook } from "./hooks/UseNumberHook";

function App() {
  const [number, handleChange] = UseNumberHook();
  return (
    <div className="App">
      <header className="App-header">
        <PhoneFormat onChange={handleChange} />
        {number}
      </header>
    </div>
  );
}

export default App;
