import { useState } from "react";
import {
  FaAngleDown,
  FaArrowRightToBracket,
  FaRegUser,
  FaBars,
  FaArrowRight,
} from "react-icons/fa6";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <div className={`nav__container ${navActive ? "active" : null}`}>
      <nav className={`nav__navbar ${navActive ? "active" : null}`}>
        <ul className="nav__content">
          <li
            className={navActive ? "active" : null}
            onClick={() => setNavActive(!navActive)}
          >
            Product
            <span className="nav__icon">
              <FaAngleDown />
            </span>
          </li>
          <li>Our Story</li>
          <li>
            FAQ
            <span className="nav__icon">
              <FaArrowRightToBracket />
            </span>
          </li>
        </ul>

        <button className={`nav__button ${navActive ? "active" : null}`}>
          <FaRegUser /> <span>Log In</span>
        </button>
        <button className="nav__menu">
          <FaBars />
        </button>
      </nav>

      <div className={`nav__product__dropdown ${navActive ? "active" : null}`}>
        <h2 className="nav__heading">Tasteful</h2>
        <div className="dropdown__content">
          <div className="dropdown__image--wrapper">
            <div className="dropdown__image--container">
              <img
                src="./images/dropdown-fruit.png"
                className="dropdown__image"
                alt=""
              />
            </div>
          </div>
          <div className="dropdown__image--wrapper">
            <div className="dropdown__image--container">
              <img
                src="./images/dropdown-steak.png"
                className="dropdown__image"
                alt=""
              />
            </div>
          </div>
          <div className="dropdown__image--wrapper">
            <div className="dropdown__image--container">
              <img
                src="./images/dropdown-pasta.png"
                className="dropdown__image"
                alt=""
              />
            </div>
          </div>
          <div className="dropdown__image--wrapper">
            <div className="dropdown__image--container">
              <img
                src="./images/dropdown-nuts.png"
                className="dropdown__image"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="dropdown__link">
          <span>
            All Products <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
