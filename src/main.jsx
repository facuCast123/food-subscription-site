import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import MealPlan from "./pages/MealPlan";
import ProductsListing from "./pages/ProductsListing";
import ProductsGrid from "./components/products-listing/ProductsGrid";

import "./index.css";
import ProductDetails from "./pages/ProductDetails";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<LandingPage />} />

          <Route path="meal-plan" element={<MealPlan />} />

          <Route path="products" element={<ProductsListing />}>
            <Route index element={<ProductsGrid />} />
            <Route path="soups" element={<ProductsGrid />} />
            <Route path="salads" element={<ProductsGrid />} />
            <Route path="smoothies" element={<ProductsGrid />} />
          </Route>

          <Route path="details/:type/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
