import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root.jsx";
import "@/assets/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
