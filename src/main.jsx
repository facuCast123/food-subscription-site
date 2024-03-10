import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import MealPlan from "./pages/MealPlan";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="meal-plan" element={<MealPlan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
