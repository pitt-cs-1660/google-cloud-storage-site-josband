import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello! Welcome to my CS 1660 Final Project. - Jonah Osband</p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setClicked(true)}
        >
          H2P
        </a>
        {clicked ? <p>Please don't fail me.</p> : null}
      </header>
    </div>
  );
}

export default App;
