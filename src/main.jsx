import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { ErrorBoundary } from "react-error-boundary";
// import ErrorFallback from "./ui/ErrorFallback.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={<span>hello</span>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
