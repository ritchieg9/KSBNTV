import React from "react";
import ReactDOM from "react-dom";
import ChannelList from "../components/ChannelList";
import Player from "../components/Player";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Ewok</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Player />
      <ChannelList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
