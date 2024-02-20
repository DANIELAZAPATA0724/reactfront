import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Importamos bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");

// Utilizamos createRoot si está disponible, de lo contrario, usamos render
const createRoot = rootElement.createRoot || ReactDOM.createRoot;

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si deseas medir el rendimiento, puedes habilitar reportWebVitals
reportWebVitals();
