import {
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaPinterestP,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="footer__link__container">
          <span>Product</span>
          <Link to={"/products"}>Main dish</Link>
          <Link to={"/products/soups"}>Soup</Link>
          <Link to={"/products/salads"}>Salad</Link>
          <Link to={"/products/smoothies"}>Smoothie</Link>
        </div>

        <div className="footer__link__container">
          <span>About</span>
          <a>Our story</a>
          <a>Green promise</a>
          <a>News</a>
        </div>

        <div className="footer__link__container">
          <span>Store</span>
          <Link to={"/meal-plan"}>Subscription</Link>
          <a>Gift</a>
        </div>

        <div className="footer__link__container">
          <span>Help</span>
          <a>Faq</a>
          <a>Contact</a>
        </div>

        <div className="footer__link__container">
          <span>Follow us</span>
          <div className="footer__socials">
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/home" target="_blank">
              <FaXTwitter />
            </a>
            <a href="https://www.tiktok.com/en/" target="_blank">
              <FaTiktok />
            </a>
            <a href="https://ar.pinterest.com/" target="_blank">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      <span className="footer__brand">Tasteful</span>
    </footer>
  );
};

export default Footer;
