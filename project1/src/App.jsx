import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as Day1 from "./components/Day1.jsx";
import * as Day2 from "./components/Day2.jsx";

//console.log(Day1);

function App() {
  return (
    <div className="App">
      <h1>This is App component</h1>
      {/* <Day1.Component1 />
      <Day1.Component2 />
      <Day1.Component3 />
      <Day1.Component4 />
      <Day1.Component3 /> */}
      <Day2.Component1 />
      <Day2.Component2 />
      <Day2.Component3 />
      <Day2.Component4 />
    </div>
  );
}

export default App;
