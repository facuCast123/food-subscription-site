import "./ProductsGrid.css";
import MealData from "../../Data/MealData";

const ProductGrid = () => {
  return (
    <div className="products-grid">
      {MealData.map((meal) => {
        return (
          <div className="products-grid__product" key={meal.id}>
            <img src={meal.url} alt={meal.title} />
            <p>{meal.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductGrid;
