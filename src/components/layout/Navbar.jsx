import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaAngleDown,
  FaArrowRightToBracket,
  FaRegUser,
  FaBars,
  FaArrowRight,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaPinterestP,
} from "react-icons/fa6";

import "./Navbar.css";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const location = useLocation();

  // Close navbar on route change
  useEffect(() => {
    setNavActive(false);
  }, [location.pathname]);

  // Navabr/Menu dropdown functions
  const handleNav = () => {
    menuActive === false ? setNavActive(!navActive) : setMenuActive(false),
      setNavActive(!navActive);
  };

  const handleMenu = () => {
    navActive === false ? setMenuActive(!menuActive) : setNavActive(false),
      setMenuActive(!menuActive);
  };

  // Change styling on different routes
  let navbarStyle;
  let navbarTitle;
  let navbarButton;

  switch (location.pathname) {
    case "/meal-plan":
      navbarStyle = { display: "none" };
      break;
    case "/products":
    case "/products/soups":
    case "/products/salads":
    case "/products/smoothies":
    case `/details/${location.pathname.split("/")[2]}/${
      location.pathname.split("/")[3]
    }`:
      navbarStyle = { color: "black" };
      navbarTitle = { display: "block" };
      navbarButton = { border: "1px solid black", color: "black" };
      break;
    default:
      navbarStyle = {};
  }

  return (
    <div
      className={`nav__container ${navActive ? "active" : null}`}
      style={navbarStyle}
    >
      <nav
        className={`nav__navbar ${navActive ? "active" : null}`}
        style={navbarStyle}
      >
        <ul className="nav__content">
          <li
            className={navActive ? "active" : null}
            onClick={() => handleNav()}
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

        <Link to={"/"} className="nav__title" style={navbarTitle}>
          <h2>Tasteful</h2>
        </Link>

        <button
          className={`nav__button ${navActive ? "active" : null} ${
            menuActive ? "menuActive" : null
          }`}
          style={navbarButton}
        >
          <FaRegUser /> <span>Log In</span>
        </button>

        <button className="nav__menu" onClick={() => handleMenu()}>
          <FaBars
            className={`nav__menu__icon ${menuActive ? "active" : null}`}
          />
          <div
            className={`nav__menu__dropdown ${
              navActive ? null : menuActive ? "active" : null
            }`}
          >
            <div className="menu__dropdown__image"></div>

            <div className="menu__dropdown__content">
              <h2>ALL PRODUCTS</h2>

              <div className="menu__images">
                <div className="menu__dropdown__image--wrapper">
                  <div className="menu__dropdown__image--container">
                    <img
                      src="/images/dropdown-fruit.png"
                      className="dropdown__image"
                      alt=""
                    />
                  </div>
                </div>

                <div className="menu__dropdown__image--wrapper">
                  <div className="menu__dropdown__image--container">
                    <img
                      src="/images/dropdown-steak.png"
                      className="dropdown__image"
                      alt=""
                    />
                  </div>
                </div>

                <div className="menu__dropdown__image--wrapper">
                  <div className="menu__dropdown__image--container">
                    <img
                      src="/images/dropdown-pasta.png"
                      className="dropdown__image"
                      alt=""
                    />
                  </div>
                </div>

                <div className="menu__dropdown__image--wrapper">
                  <div className="menu__dropdown__image--container">
                    <img
                      src="/images/dropdown-nuts.png"
                      className="dropdown__image"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="menu__links">
                <Link to="products">
                  <p>All products</p>
                </Link>
                <p>Promise</p>
                <p>News</p>
                <p>FAQ</p>
              </div>

              <div className="menu__socials">
                <FaInstagram />
                <FaXTwitter />
                <FaTiktok />
                <FaPinterestP />
              </div>
            </div>
          </div>
        </button>
      </nav>

      <div className={`nav__product__dropdown ${navActive ? "active" : null}`}>
        <h2 className="nav__heading">Tasteful</h2>

        <div className="dropdown__content">
          <div className="dropdown__image--wrapper">
            <div className="dropdown__image--container">
              <img
                src="/images/dropdown-fruit.png"
                className="dropdown__image"
                alt=""
              />
            </div>
          </div>
          <div className="dropdown__image--wrapper">
            <div className="dropdown__image--container">
              <img
                src="/images/dropdown-steak.png"
                className="dropdown__image"
                alt=""
              />
            </div>
          </div>
          <div className="dropdown__image--wrapper">
            <div className="dropdown__image--container">
              <img
                src="/images/dropdown-pasta.png"
                className="dropdown__image"
                alt=""
              />
            </div>
          </div>
          <div className="dropdown__image--wrapper">
            <div className="dropdown__image--container">
              <img
                src="/images/dropdown-nuts.png"
                className="dropdown__image"
                alt=""
              />
            </div>
          </div>
        </div>

        <Link to={"products"} className="dropdown__link">
          <span>
            All Products <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
