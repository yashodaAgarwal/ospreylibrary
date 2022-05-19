import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  FilterProvider,
  ServerProvider,
  VideoProvider,
} from "./context";
// Call make Server

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <VideoProvider>
          <FilterProvider>
            <ServerProvider>
              <App />
            </ServerProvider>
          </FilterProvider>
        </VideoProvider>

    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
