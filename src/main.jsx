import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./latihan/Form";
import "./index.css";
// import Parent from "./latihan/Parent.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Form />
    </ThemeContextProvider>
  </React.StrictMode>,
);
