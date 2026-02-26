import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";  // 👈 ADD THIS
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>   {/* 👈 WRAP APP */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
