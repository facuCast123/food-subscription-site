import { useLocation } from "react-router-dom";
import "./ProductsGrid.css";

import MealData from "../../Data/MealData";
import ImageComponent from "./ImageComponent";

const ProductGrid = () => {
  const location = useLocation();

  return (
    <div className="products-grid">
      {location.pathname === "/products"
        ? MealData.meals.map((meal) => {
            return (
              <div className="products-grid__product" key={meal.id}>
                <ImageComponent src={meal.url} />
                <p>{meal.title}</p>
              </div>
            );
          })
        : location.pathname === "/products/soups"
        ? MealData.soups.map((soup) => {
            return (
              <div className="products-grid__product" key={soup.id}>
                <ImageComponent src={soup.url} />
                <p>{soup.title}</p>
              </div>
            );
          })
        : location.pathname === "/products/salads"
        ? MealData.salads.map((salad) => {
            return (
              <div className="products-grid__product" key={salad.id}>
                <ImageComponent src={salad.url} />
                <p>{salad.title}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ProductGrid;
