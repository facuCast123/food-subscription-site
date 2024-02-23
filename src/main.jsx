import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./components/layout/Navbar";
import LandingPage from "./components/layout/LandingPage";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Navbar />
      <LandingPage />
    </>
  </React.StrictMode>
);
