import { NavLink, Outlet } from "react-router-dom";

const ProductsListing = () => {
  const activeStyles = {
    color: "white",
    backgroundColor: "var(--_tangerine-branding)",
  };

  return (
    <div className="listing">
      <nav className="listing__select">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Main dish
        </NavLink>

        <NavLink
          to="soups"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Soup
        </NavLink>

        <NavLink
          to="salads"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Salad
        </NavLink>
        <NavLink>Smoothie</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default ProductsListing;
