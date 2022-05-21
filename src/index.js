import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  FilterProvider,
  ServerProvider,
  ThemeProvider,
  VideoProvider,
} from "./context";
// Call make Server

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
      <AuthProvider>
        <VideoProvider>
          <FilterProvider>
            <ServerProvider>
              <App />
            </ServerProvider>
          </FilterProvider>
        </VideoProvider>
      </AuthProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
