import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LandingPage from "./pages/LandingPage";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  </React.StrictMode>
);
