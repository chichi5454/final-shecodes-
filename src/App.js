/** @format */

import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <div className="footer">
        Coded by <strong> Lauryn Mutai </strong>
        and is open-sourced on
        <a href="https://github.com/chichi5454" target="blank">
          {" "}
          GitHub{" "}
        </a>
        and hosted on{" "}
        <a href="https://spiffy-seahorse-8e4573.netlify.app/" target="blank">
          {" "}
          Netlify
        </a>
      </div>
    </div>
  );
}

export default App;
